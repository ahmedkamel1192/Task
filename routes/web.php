<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


use Inertia\Inertia; // We are going to use this class to render React components

Route::get('/', function () {
    return Inertia::render('CreateTask'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});