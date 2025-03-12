<?php

namespace App\Http\Controllers;

use App\Models\Horaire;
use Illuminate\Http\Request;

class HoraireController extends Controller
{

    
    
    
    
    /**
     * Affiche une liste de tous les horaires.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Horaire::all());
    }
    
    /**
     * Stocke un nouvel horaire dans la base de données.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'jour' => 'required|string|max:20',
            'horaire_ouverture' => 'required|date_format:H:i',
            'horaire_fermeture' => 'required|date_format:H:i|after:horaire_ouverture',
        ]);
    
        $horaire = Horaire::create($validated);
    
        return response()->json($horaire, 201);
    }
    
    /**
     * Affiche un horaire spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(Horaire::findOrFail($id));
    }
    
    /**
     * Met à jour un horaire spécifique.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $horaire = Horaire::findOrFail($id);
        $horaire->update($request->all());
        return response()->json($horaire);
    }
    
    /**
     * Supprime un horaire spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Horaire::destroy($id);
        return response()->json(null, 204);
    }
}
