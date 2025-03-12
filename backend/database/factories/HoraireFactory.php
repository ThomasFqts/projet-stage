<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Horaire;

class HoraireFactory extends Factory
{
    protected $model = Horaire::class;

    public function definition()
    {
        return [
            'jour' => $this->faker->dayOfWeek,
            'horaire_ouverture' => $this->faker->time('H:i'),
            'horaire_fermeture' => $this->faker->time('H:i'),
        ];
    }
}
