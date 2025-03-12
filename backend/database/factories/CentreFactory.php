<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Centre;
use App\Models\Adresse;

class CentreFactory extends Factory
{
    protected $model = Centre::class;

    public function definition()
    {
        return [
            'numero_finess' => $this->faker->unique()->randomNumber(8, true),
            'nom' => $this->faker->company,
            'site_web' => $this->faker->url,
            'numero_telephone' => $this->faker->phoneNumber,
            'adresse_mail' => $this->faker->safeEmail,
            'coordonnee_geographique' => $this->faker->latitude . ', ' . $this->faker->longitude,
            'adresse' => $this->faker->address,
            'code_postal' => Adresse::factory()->create()->code_postal,
        ];
    }
}
