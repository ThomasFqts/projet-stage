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
        DB::table('horaires')->insert([
            ['jour' => 'Lundi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
            ['jour' => 'Mardi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
            ['jour' => 'Mercredi', 'horaire_ouverture' => '08:00', 'horaire_fermeture' => '18:00'],
        ]);
    }
}
