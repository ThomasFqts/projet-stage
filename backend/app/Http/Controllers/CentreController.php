<?php

namespace App\Http\Controllers;

use App\Models\Centre;
use Illuminate\Http\Request;

class CentreController extends Controller
{
    public function index()
    {
        return response()->json(Centre::with('adresse', 'horaire', 'modalite')->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'numero_finess' => 'required|integer|unique:centres,numero_finess',
            'nom' => 'required|string',
            'adresse_mail' => 'required|email',
            'numero_telephone' => 'required|string',
            'adresse' => 'required|string',
            'code_postal' => 'required|integer|exists:adresses,code_postal'
        ]);

        $centre = Centre::create($request->all());
        return response()->json($centre, 201);
    }

    public function show($id)
    {
        return response()->json(Centre::with('adresse', 'horaires', 'modalites')->findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $centre = Centre::findOrFail($id);
        $centre->update($request->all());
        return response()->json($centre);
    }

    public function destroy($id)
    {
        Centre::destroy($id);
        return response()->json(null, 204);
    }
}
