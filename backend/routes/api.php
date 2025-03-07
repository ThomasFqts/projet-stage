<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdresseController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\ModaliteController;
use App\Http\Controllers\CentreController;
use App\Http\Controllers\CentreHoraireController;
use App\Http\Controllers\CentreModaliteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Routes pour la gestion des adresses
 */
Route::get('/adresse', [AdresseController::class, 'index']);
Route::post('/adresse', [AdresseController::class, 'store']);
Route::get('/adresse/{id}', [AdresseController::class, 'show']);
Route::put('/adresse/{id}', [AdresseController::class, 'update']);
Route::delete('/adresse/{id}', [AdresseController::class, 'destroy']);

/**
 * Routes pour la gestion des horaires
 */
Route::get('/horaire', [HoraireController::class, 'index']);
Route::post('/horaire', [HoraireController::class, 'store']);
Route::get('/horaire/{id}', [HoraireController::class, 'show']);
Route::put('/horaire/{id}', [HoraireController::class, 'update']);
Route::delete('/horaire/{id}', [HoraireController::class, 'destroy']);

/**
 * Routes pour la gestion des modalités
 */
Route::get('/modalite', [ModaliteController::class, 'index']);
Route::post('/modalite', [ModaliteController::class, 'store']);
Route::get('/modalite/{id}', [ModaliteController::class, 'show']);
Route::put('/modalite/{id}', [ModaliteController::class, 'update']);
Route::delete('/modalite/{id}', [ModaliteController::class, 'destroy']);

/**
 * Routes pour la gestion des centres
 */
Route::get('/centre', [CentreController::class, 'index']);
Route::post('/centre', [CentreController::class, 'store']);
Route::get('/centre/{id}', [CentreController::class, 'show']);
Route::put('/centre/{id}', [CentreController::class, 'update']);
Route::delete('/centre/{id}', [CentreController::class, 'destroy']);

/**
 * Routes pour gérer la relation Centre - Horaire (Table Pivot)
 */
Route::post('/centre-horaire', [CentreHoraireController::class, 'store']);
Route::delete('/centre-horaire/{numero_finess}/{id_horaire}', [CentreHoraireController::class, 'destroy']);

/**
 * Routes pour gérer la relation Centre - Modalité (Table Pivot)
 */
Route::post('/centre-modalite', [CentreModaliteController::class, 'store']);
Route::delete('/centre-modalite/{numero_finess}/{id_modalite}', [CentreModaliteController::class, 'destroy']);
