<?php

namespace App\Http\Controllers;

use App\Models\Adresse;
use Illuminate\Http\Request;


class AdresseController extends Controller
{
    public function index()
    {
        return response()->json(Adresse::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'code_postal' => 'required|integer|unique:adresse,code_postal',
            'ville' => 'required|string'
        ]);

        $adresse = Adresse::create($request->all());
        return response()->json($adresse, 201);
    }

    public function show($id)
    {
        return response()->json(Adresse::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $adresse = Adresse::findOrFail($id);
        $adresse->update($request->all());
        return response()->json($adresse);
    }

    public function destroy($id)
    {
        Adresse::destroy($id);
        return response()->json(null, 204);
    }
}
