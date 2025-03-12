<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Adresse;

class AdresseFactory extends Factory
{
    protected $model = Adresse::class;

    public function definition()
    {
        return [
            'code_postal' => $this->faker->unique()->numberBetween(10000, 99999),
            'ville' => $this->faker->city,
        ];
    }
}
