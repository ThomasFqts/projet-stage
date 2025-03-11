<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentreHoraireController extends Controller
{
    /**
     * Cette fonction permet d'ajouter une nouvelle relation entre un centre et un horaire dans la base de données.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        DB::table('centre_horaire')->insert([
            'numero_finess' => $request->numero_finess,
            'id_horaire' => $request->id_horaire
        ]);

        return response()->json(['message' => 'Relation ajoutée'], 201);
    }

    /**
     * Supprime une entrée de la table 'centre_horaire' en fonction du numéro FINESS et de l'ID horaire fournis.
     *
     * @param string $numero_finess Le numéro FINESS du centre.
     * @param int $id_horaire L'ID de l'horaire à supprimer.
     * @return \Illuminate\Http\JsonResponse Réponse JSON avec un statut HTTP 204 (No Content) en cas de succès.
     */
    public function destroy($numero_finess, $id_horaire)
    {
        DB::table('centre_horaire')->where([
            'numero_finess' => $numero_finess,
            'id_horaire' => $id_horaire
        ])->delete();

        return response()->json(null, 204);
    }
}
