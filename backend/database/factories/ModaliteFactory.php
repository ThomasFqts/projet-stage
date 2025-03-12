<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Modalite;

class ModaliteFactory extends Factory
{
    protected $model = Modalite::class;

    public function definition()
    {
        return [
            'nom_modalite' => $this->faker->word,
        ];
    }
}
