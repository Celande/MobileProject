<?php
// DIC configuration

/* http://www.bradcypert.com/building-a-restful-api-in-php-using-slim-eloquent/ */

use Illuminate\Database\Capsule\Manager as Capsule;
use \Illuminate\Database\Schema\Blueprint as Blueprint;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use App\Handlers\NotFoundHandler;
use App\Handlers\NotAllowedHandler;

require_once __DIR__ . '/../src/create_table.php';

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
  $settings = $c->get('settings')['renderer'];
  return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog from settings
$container['logger'] = function ($c) {
  $settings = $c->get('settings')['logger'];
  $logger = new Monolog\Logger($settings['name']);
  $logger->pushProcessor(new Monolog\Processor\UidProcessor());
  $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
  return $logger;
};

// Img path
$container['img_breed'] = function ($c) {
  $img = 'img/breed/';
  return $img;
};

$container['img_goat'] = function ($c) {
  $img = 'img/goat/';
  return $img;
};

// Service factory for the ORM // Eloquence Database
$container['db'] = function ($container) {
  $capsule = new Capsule;

  // Connection to the DB
  $capsule->addConnection($container['settings']['db']);

  $capsule->setAsGlobal();
  $capsule->bootEloquent();

  // Create the tables in the DB
  $capsule = create_table($capsule, $container->get('img_breed'),$container->get('img_goat'));

  // Catch exceptions
  $capsule->getContainer()->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
  );

  return $capsule;
};

// Twig view
$container['view'] = function ($container) {
  $templates = __DIR__ . '/../templates/';
  $cache = __DIR__ . '/tmp/views/';

  /* Use the cache to not load again and again the same page */
  $view = new Slim\Views\Twig($templates, compact('cache'));

  /* Use for development */
  $view = new Slim\Views\Twig($templates, array(
    'cache' => false,
  ));

  // Instantiate and add Slim specific extension
  $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
  $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

  return $view;
};

// Mobile of the breed table
$container[App\Mobiles\BreedMobile::class] = function ($c) {
  $view = $c->get('view');
  $logger = $c->get('logger');
  $table = $c->get('db')->table('breed');
  $imgDir = $c->get('img_breed');
  return new App\Mobiles\BreedMobile($view, $logger, $table, $imgDir);
};

// Mobile of the goat table
$container[App\Mobiles\GoatMobile::class] = function ($c) {
  $view = $c->get('view');
  $logger = $c->get('logger');
  $table = $c->get('db')->table('goat');
  $imgDir = $c->get('img_goat');
  return new App\Mobiles\GoatMobile($view, $logger, $table, $imgDir);
};

// Mobile of the image table
$container[App\Mobiles\ImageMobile::class] = function ($c) {
  $view = $c->get('view');
  $logger = $c->get('logger');
  $table = $c->get('db')->table('image');
  $imgDir = 'img/';
  return new App\Mobiles\ImageMobile($view, $logger, $table, $imgDir);
};
