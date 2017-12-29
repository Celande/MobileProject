<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->group('/mobile', function(){
  $this->group('/breeds', function (){{
    // Get all goat breeds from the database
    $this->get('', 'App\Mobiles\BreedMobile:showBreeds');
    // Get info on one goat breed from the database
    $this->get('/{id}', 'App\Mobiles\BreedMobile:showBreed');
  }});

  $this->group('/goats', function(){
    // Get list of all goats from the DB
    $this->get('', 'App\Mobiles\GoatMobile:showGoats');
    // GET: Get access to the form to add a goat
    // POST: Add the goat to the DB if its identification isn't already in
    $this->map(['OPTIONS', 'POST'], '/add', 'App\Mobiles\GoatMobile:addGoat');
    // Remove a goat from the DB
    $this->get('/remove/{id}', 'App\Mobiles\GoatMobile:removeGoat');
    // GET: Get access to the form to modify data on a goat
    // POST: Replace updated goat in the DB
    $this->map(['GET', 'POST', 'OPTIONS'], '/update/{id}', 'App\Mobiles\GoatMobile:updateGoat');
    // Get info on one goat
    $this->get('/{id}', 'App\Mobiles\GoatMobile:showGoat');
  });
  $this->get('/image/{id}', 'App\Mobiles\ImageMobile:getImageJsonById');
});
