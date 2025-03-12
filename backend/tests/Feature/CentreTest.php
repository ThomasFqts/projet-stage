<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Centre;
use App\Models\Adresse;

class CentreTest extends TestCase
{
    use RefreshDatabase;

    public function test_ajout_centre_succes()
    {
        $adresse = Adresse::factory()->create();
        $modalite = \App\Models\Modalite::factory()->create();
        $horaire = \App\Models\Horaire::factory()->create();

        $response = $this->postJson('/api/centres', [
            'numero_finess' => 123456789,
            'nom' => 'Centre Test',
            'site_web' => 'https://example.com',
            'numero_telephone' => '0123456789',
            'adresse_mail' => 'test@example.com',
            'coordonnee_geographique' => '48.8566, 2.3522',
            'adresse' => '1 rue du Test',
            'code_postal' => $adresse->code_postal,
            'modalites' => [$modalite->id_modalite],
            'horaires' => [$horaire->id_horaire]
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('centres', ['nom' => 'Centre Test']);
    }

    public function test_recuperation_centres()
    {
        Centre::factory()->create(['nom' => 'Centre Test 1']);
        Centre::factory()->create(['nom' => 'Centre Test 2']);

        $response = $this->getJson('/api/centres');
        $response->assertStatus(200);
        $response->assertJsonCount(2);
    }
}
