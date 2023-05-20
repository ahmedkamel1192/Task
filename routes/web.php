<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
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

Route::resource('tasks', TaskController::class);
Route::resource('users', UserController::class);
Route::resource('admins', AdminController::class);
Route::resource('statistics', StatisticsController::class);

