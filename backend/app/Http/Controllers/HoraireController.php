<?php

namespace App\Http\Controllers;

use App\Models\Horaire;
use Illuminate\Http\Request;

class HoraireController extends Controller
{
    public function index()
    {
        return response()->json(Horaire::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'jour' => 'required|string',
            'horaire_ouverture' => 'required',
            'horaire_fermeture' => 'required'
        ]);

        $horaire = Horaire::create($request->all());
        return response()->json($horaire, 201);
    }

    public function show($id)
    {
        return response()->json(Horaire::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $horaire = Horaire::findOrFail($id);
        $horaire->update($request->all());
        return response()->json($horaire);
    }

    public function destroy($id)
    {
        Horaire::destroy($id);
        return response()->json(null, 204);
    }
}
