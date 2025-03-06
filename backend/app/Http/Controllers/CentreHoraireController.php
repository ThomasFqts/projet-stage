<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentreHoraireController extends Controller
{
    public function store(Request $request)
    {
        DB::table('centre_horaire')->insert([
            'numero_finess' => $request->numero_finess,
            'id_horaire' => $request->id_horaire
        ]);

        return response()->json(['message' => 'Relation ajoutée'], 201);
    }

    public function destroy($numero_finess, $id_horaire)
    {
        DB::table('centre_horaire')->where([
            'numero_finess' => $numero_finess,
            'id_horaire' => $id_horaire
        ])->delete();

        return response()->json(null, 204);
    }
}
