<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentreModaliteController extends Controller
{
    public function store(Request $request)
    {
        DB::table('centre_modalite')->insert([
            'numero_finess' => $request->numero_finess,
            'id_modalite' => $request->id_modalite
        ]);

        return response()->json(['message' => 'Relation ajoutée'], 201);
    }

    public function destroy($numero_finess, $id_modalite)
    {
        DB::table('centre_modalite')->where([
            'numero_finess' => $numero_finess,
            'id_modalite' => $id_modalite
        ])->delete();

        return response()->json(null, 204);
    }
}
