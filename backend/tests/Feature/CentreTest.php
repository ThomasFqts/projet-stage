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

    public function test_ajout_centre_failure()
    {
        $adresse = Adresse::factory()->create();
        $modalite = \App\Models\Modalite::factory()->create();
        $horaire = \App\Models\Horaire::factory()->create();

        $response = $this->postJson('/api/centres', [
            'numero_finess' => 123456789,
            // 'nom' est volontairement omis ici
            'site_web' => 'https://example.com',
            'numero_telephone' => '0123456789',
            'adresse_mail' => 'test@example.com',
            'coordonnee_geographique' => '48.8566, 2.3522',
            'adresse' => '1 rue du Test',
            'code_postal' => $adresse->code_postal,
            'modalites' => [$modalite->id_modalite],
            'horaires' => [$horaire->id_horaire]
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_de_l_injection_sql()
    {

        $adresse = Adresse::factory()->create();
        $modalite = \App\Models\Modalite::factory()->create();
        $horaire = \App\Models\Horaire::factory()->create();

        $response = $this->postJson('/api/centres', [
            'numero_finess' => 753896412,
            'nom' => 'Centre"); DROP TABLE centres;--',
            'site_web' => 'https://example.com',
            'numero_telephone' => '0123456789',
            'adresse_mail' => 'test@example.com',
            'coordonnee_geographique' => '48.8566, 2.3522',
            'adresse' => '1 rue du Test',
            'code_postal' => $adresse->code_postal,
            'modalites' => [$modalite->id_modalite],
            'horaires' => [$horaire->id_horaire]
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_d_une_tentative_de_xss()
    {
        $adresse = Adresse::factory()->create();
        $modalite = \App\Models\Modalite::factory()->create();
        $horaire = \App\Models\Horaire::factory()->create();

        $data = [
            'numero_finess' => 753896412,
            'nom' => "<script>alert('xss')</script>",
            'site_web' => 'https://example.com',
            'adresse' => '456 Rue Malicieuse',
            'numero_telephone' => '0123456789',
            'adresse_mail' => 'test@example.com',
            'coordonnee_geographique' => '48.8566, 2.3522',
            'adresse' => '1 rue du Test',
            'code_postal' => $adresse->code_postal,
            'modalites' => [$modalite->id_modalite],
            'horaires' => [$horaire->id_horaire]
        ];

        $response = $this->postJson('/api/centres', $data);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }
}
