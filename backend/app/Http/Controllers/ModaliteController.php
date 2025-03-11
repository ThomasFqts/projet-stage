<?php

namespace App\Http\Controllers;

use App\Models\Modalite;
use Illuminate\Http\Request;

class ModaliteController extends Controller
{

    /**
     * Affiche une liste de toutes les modalités.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Modalite::all());
    }

    /**
     * Stocke une nouvelle modalité dans la base de données.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // ...
    }

    /**
     * Affiche une modalité spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        // ...
    }

    /**
     * Met à jour une modalité spécifique.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        // ...
    }

    /**
     * Supprime une modalité spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        // ...
    }
}
