<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Horaire;

class HoraireTest extends TestCase
{
    use RefreshDatabase;

    public function test_ajout_horaire_succes()
    {
        $response = $this->postJson('/api/horaires', [
            'jour' => 'Lundi',
            'horaire_ouverture' => '09:00',
            'horaire_fermeture' => '17:00',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('horaires', ['jour' => 'Lundi', 'horaire_ouverture' => '09:00', 'horaire_fermeture' => '17:00']);
    }

    public function test_recuperation_horaires()
    {
        Horaire::factory()->create(['jour' => 'Lundi', 'horaire_ouverture' => '09:00', 'horaire_fermeture' => '17:00']);
        Horaire::factory()->create(['jour' => 'Mardi', 'horaire_ouverture' => '10:00', 'horaire_fermeture' => '18:00']);

        $response = $this->getJson('/api/horaires');
        $response->assertStatus(200);
        $response->assertJsonCount(2);
    }

    public function test_ajout_horaire_failure()
    {
        $response = $this->postJson('/api/horaires', [
            'horaire_ouverture' => '09:00',
            'horaire_fermeture' => '17:00',
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_de_l_injection_sql()
    {
        $response = $this->postJson('/api/horaires', [
            'jour' => 'Lundi',
            'horaire_ouverture' => '09:00',
            'horaire_fermeture' => '17:00',
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_d_une_tentative_de_xss()
    {
        $data = [
            'jour' => '<script>alert("XSS")</script>',
            'horaire_ouverture' => '09:00',
            'horaire_fermeture' => '17:00',
        ];

        $response = $this->postJson('/api/horaires', $data);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }
}
