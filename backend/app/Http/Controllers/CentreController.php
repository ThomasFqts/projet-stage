<?php

namespace App\Http\Controllers;

use App\Models\Centre;
use App\Models\Adresse;
use App\Models\Horaire;
use App\Models\Modalite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentreController extends Controller
{
    /**
     * Affiche une liste de tous les centres avec leurs adresses, horaires et modalités.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Centre::with('adresses', 'horaires', 'modalites')->get());
    }

    /**
     * Crée un nouveau centre avec les données fournies dans la requête.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'numero_finess' => 'required|integer|unique:centres,numero_finess',
            'nom' => 'required|string|max:255|regex:/^[^\'";><]*$/',
            'site_web' => 'nullable|url',
            'numero_telephone' => 'required|string|max:20',
            'adresse_mail' => 'required|email',
            'coordonnee_geographique' => 'nullable|string|regex:/^[^\'";><]*$/',
            'adresse' => 'required|string|regex:/^[^\'";><]*$/', // Adresse complète (ex: "1 rue de Paris")
            'code_postal' => 'required|integer',
            'ville' => 'nullable|string|regex:/^[^\'";><]*$/', // Ville si ajout manuel
            'modalites' => 'array|required',
            'modalites.*' => 'integer|exists:modalites,id_modalite',
            'horaires' => 'array|required',
            'horaires.*' => 'integer|exists:horaires,id_horaire',
        ]);

        try {
            DB::beginTransaction();

            // Vérifier si l'adresse existe, sinon l'ajouter
            $adresse = Adresse::firstOrCreate(
                ['code_postal' => $validated['code_postal']],
                ['ville' => $validated['ville'] ?? '']
            );

            // Création du centre
            $centre = Centre::create([
                'numero_finess' => $validated['numero_finess'],
                'nom' => $validated['nom'],
                'site_web' => $validated['site_web'],
                'numero_telephone' => $validated['numero_telephone'],
                'adresse_mail' => $validated['adresse_mail'],
                'coordonnee_geographique' => $validated['coordonnee_geographique'],
                'adresse' => $validated['adresse'],
                'code_postal' => $adresse->code_postal,
            ]);

            // Associer les modalités
            $centre->modalites()->attach($validated['modalites']);

            // Associer les horaires
            $centre->horaires()->attach($validated['horaires']);

            DB::commit();
            return response()->json($centre->load('modalites', 'horaires'), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    /**
     * Affiche les détails d'un centre spécifique avec ses adresses, horaires et modalités.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(Centre::with('adresses', 'horaires', 'modalites')->findOrFail($id));
    }

    /**
     * Met à jour les informations d'un centre spécifique avec les données fournies dans la requête.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $centre = Centre::findOrFail($id);
        $centre->update($request->all());
        return response()->json($centre);
    }

    /**
     * Supprime un centre spécifique.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Centre::destroy($id);
        return response()->json(null, 204);
    }

    public function getFormData()
    {
        return response()->json([
            'adresses' => Adresse::all(),
            'modalites' => Modalite::all(),
            'horaires' => Horaire::all(),
        ]);
    }
}
