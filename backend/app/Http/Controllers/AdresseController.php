<?php

namespace App\Http\Controllers;

use App\Models\Adresse;
use Illuminate\Http\Request;


class AdresseController extends Controller
{
    /**
     * Affiche une liste de toutes les adresses.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Adresse::all());
    }

    /**
     * Stocke une nouvelle adresse dans la base de données.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'code_postal' => 'required|integer|unique:adresse,code_postal',
            'ville' => 'required|string|regex:/^[^\'";><]*$/'
        ]);

        $adresse = Adresse::create($request->all());
        return response()->json($adresse, 201);
    }

    /**
     * Affiche les détails d'une adresse spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(Adresse::findOrFail($id));
    }

    /**
     * Met à jour une adresse existante dans la base de données.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $adresse = Adresse::findOrFail($id);
        $adresse->update($request->all());
        return response()->json($adresse);
    }

    /**
     * Supprime une adresse spécifique de la base de données.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Adresse::destroy($id);
        return response()->json(null, 204);
    }
}
