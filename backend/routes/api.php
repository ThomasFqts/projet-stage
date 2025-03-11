<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdresseController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\ModaliteController;
use App\Http\Controllers\CentreController;
use App\Http\Controllers\CentreHoraireController;
use App\Http\Controllers\CentreModaliteController;

/**
 * Routes pour la gestion des adresses
 */
Route::get('/adresses', [AdresseController::class, 'index']);
Route::post('/adresses', [AdresseController::class, 'store']);
Route::get('/adresses/{id}', [AdresseController::class, 'show']);
Route::put('/adresses/{id}', [AdresseController::class, 'update']);
Route::delete('/adresses/{id}', [AdresseController::class, 'destroy']);

/**
 * Routes pour la gestion des horaires
 */
Route::get('/horaires', [HoraireController::class, 'index']);
Route::post('/horaires', [HoraireController::class, 'store']);
Route::get('/horaires/{id}', [HoraireController::class, 'show']);
Route::put('/horaires/{id}', [HoraireController::class, 'update']);
Route::delete('/horaires/{id}', [HoraireController::class, 'destroy']);

/**
 * Routes pour la gestion des modalités
 */
Route::get('/modalites', [ModaliteController::class, 'index']);
Route::post('/modalites', [ModaliteController::class, 'store']);
Route::get('/modalites/{id}', [ModaliteController::class, 'show']);
Route::put('/modalites/{id}', [ModaliteController::class, 'update']);
Route::delete('/modalites/{id}', [ModaliteController::class, 'destroy']);

/**
 * Routes pour la gestion des centres
 */
Route::get('/centres', [CentreController::class, 'index']);
Route::post('/centres', [CentreController::class, 'store']);
Route::get('/centres/{id}', [CentreController::class, 'show']);
Route::put('/centres/{id}', [CentreController::class, 'update']);
Route::delete('/centres/{id}', [CentreController::class, 'destroy']);

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

Route::get('/form-data', [CentreController::class, 'getFormData']);
