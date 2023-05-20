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
    return redirect(route('tasks.index'));
});

Route::resource('tasks', TaskController::class)->only(['index', 'create','store']);;
Route::resource('users', UserController::class)->only(['index']);
Route::resource('admins', AdminController::class)->only(['index']);
Route::resource('statistics', StatisticsController::class)->only(['index']);

