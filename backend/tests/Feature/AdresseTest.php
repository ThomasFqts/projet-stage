<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Adresse;

class AdresseTest extends TestCase
{
    use RefreshDatabase;

    public function test_ajout_adresse_succes()
    {
        $response = $this->postJson('/api/adresses', [
            'code_postal' => 27000,
            'ville' => 'Évreux',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('adresses', [
            'code_postal' => 27000,
            'ville' => 'Évreux',
        ]);
    }

    public function test_recuperation_adresses()
    {
        Adresse::factory()->create([
            'code_postal' => 27000,
            'ville' => 'Évreux',
        ]);
        Adresse::factory()->create([
            'code_postal' => 27500,
            'ville' => 'Pont-Audemer',
        ]);

        $response = $this->getJson('/api/adresses');
        $response->assertStatus(200);
        $response->assertJsonCount(2);
    }

    public function test_ajout_adresse_failure()
    {
        $response = $this->postJson('/api/adresses', [
            // 'code_postal' => 27000,
            'ville' => 'Évreux',
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_de_l_injection_sql()
    {
        $response = $this->postJson('/api/adresses', [
            'code_postal' => 27000,
            'ville' => 'Évreux; DROP TABLE adresses; --',
        ]);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }

    public function rejet_d_une_tentative_de_xss()
    {
        $data = [
            'code_postal' => 27000,
            'ville' => '<script>alert("XSS")</script>Évreux',
        ];

        $response = $this->postJson('/api/adresses', $data);

        // Vérifiez que la réponse a le statut 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }
}
