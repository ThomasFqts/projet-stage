<?php

namespace App\Http\Controllers;

use App\Models\Modalite;
use Illuminate\Http\Request;

class ModaliteController extends Controller
{
    public function index()
    {
        return response()->json(Modalite::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom_modalite' => 'required|string|unique:modalite,nom_modalite'
        ]);

        $modalite = Modalite::create($request->all());
        return response()->json($modalite, 201);
    }

    public function show($id)
    {
        return response()->json(Modalite::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $modalite = Modalite::findOrFail($id);
        $modalite->update($request->all());
        return response()->json($modalite);
    }

    public function destroy($id)
    {
        Modalite::destroy($id);
        return response()->json(null, 204);
    }
}
