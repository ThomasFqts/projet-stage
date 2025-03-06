<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdresseController;
use App\Http\Controllers\HoraireController;
use App\Http\Controllers\ModaliteController;
use App\Http\Controllers\CentreController;
use App\Http\Controllers\CentreHoraireController;
use App\Http\Controllers\CentreModaliteController;
use App\Models\Adresse;
use PhpParser\Builder\Property;

Route::get('/test', function () {
    return response()->json(['message' => 'L’API fonctionne !']);
});

/**
 * Routes pour la gestion des adresses
 */
Route::get('/api/adresse', [AdresseController::class, 'index']);
Route::post('/api/adresse', [AdresseController::class, 'store']);
Route::get('/api/adresse/{id}', [AdresseController::class, 'show']);
Route::put('/api/adresse/{id}', [AdresseController::class, 'update']);
Route::delete('/api/adresse/{id}', [AdresseController::class, 'destroy']);

/**
 * Routes pour la gestion des horaires
 */
Route::get('/api/horaire', [HoraireController::class, 'index']);
Route::post('/api/horaire', [HoraireController::class, 'store']);
Route::get('/api/horaire/{id}', [HoraireController::class, 'show']);
Route::put('/api/horaire/{id}', [HoraireController::class, 'update']);
Route::delete('/api/horaire/{id}', [HoraireController::class, 'destroy']);

/**
 * Routes pour la gestion des modalités
 */
Route::get('/api/modalite', [ModaliteController::class, 'index']);
Route::post('/api/modalite', [ModaliteController::class, 'store']);
Route::get('/api/modalite/{id}', [ModaliteController::class, 'show']);
Route::put('/api/modalite/{id}', [ModaliteController::class, 'update']);
Route::delete('/api/modalite/{id}', [ModaliteController::class, 'destroy']);

/**
 * Routes pour la gestion des centres
 */
Route::get('/api/centre', [CentreController::class, 'index']);
Route::post('/api/centre', [CentreController::class, 'store']);
Route::get('/api/centre/{id}', [CentreController::class, 'show']);
Route::put('/api/centre/{id}', [CentreController::class, 'update']);
Route::delete('/api/centre/{id}', [CentreController::class, 'destroy']);

/**
 * Routes pour gérer la relation Centre - Horaire (Table Pivot)
 */
Route::post('/api/centre-horaire', [CentreHoraireController::class, 'store']);
Route::delete('/api/centre-horaire/{numero_finess}/{id_horaire}', [CentreHoraireController::class, 'destroy']);

/**
 * Routes pour gérer la relation Centre - Modalité (Table Pivot)
 */
Route::post('/api/centre-modalite', [CentreModaliteController::class, 'store']);
Route::delete('/api/centre-modalite/{numero_finess}/{id_modalite}', [CentreModaliteController::class, 'destroy']);
