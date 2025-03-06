<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HoraireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('horaire')->insert([
            ['id_horaire' => 1, 'jour' => 'Lundi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
            ['id_horaire' => 2, 'jour' => 'Mardi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
            ['id_horaire' => 3, 'jour' => 'Mercredi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
        ]);
    }
}
