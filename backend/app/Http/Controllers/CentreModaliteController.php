<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentreModaliteController extends Controller
{
    
    /**
     * Ajoute une nouvelle relation entre un centre et une modalité.
     *
     * @param \Illuminate\Http\Request $request La requête HTTP contenant les données de la relation à ajouter.
     * @return \Illuminate\Http\JsonResponse Une réponse JSON avec un message de succès et un code de statut 201.
     */
    public function store(Request $request)
    {
        DB::table('centre_modalite')->insert([
            'numero_finess' => $request->numero_finess,
            'id_modalite' => $request->id_modalite
        ]);
        
        return response()->json(['message' => 'Relation ajoutée'], 201);
    }
    
    /**
     * Supprime une relation existante entre un centre et une modalité.
     *
     * @param string $numero_finess Le numéro FINESS du centre.
     * @param int $id_modalite L'identifiant de la modalité.
     * @return \Illuminate\Http\JsonResponse Une réponse JSON avec un code de statut 204 (No Content).
     */
    public function destroy($numero_finess, $id_modalite)
    {
        DB::table('centre_modalite')->where([
            'numero_finess' => $numero_finess,
            'id_modalite' => $id_modalite
        ])->delete();

        return response()->json(null, 204);
    }
}
