import { Component } from '@angular/core';

export interface GoatInterface {
    id: number,
    name: string,
    price: number,
    date: any,
    breed_id: number,
    gender: string,
    localisation: string,
    description?: string,
    img_id: number,
    img_path: string
}

export class Goat {
    id: number;
    name: string;
    price: number;
    date: any;
    breed_id: number;
    gender: string;
    localisation: string;
    description?: string;
    img_id: number;
}