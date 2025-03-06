<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdresseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('adresse')->insert([
            ['code_postal' => 75001, 'ville' => 'Paris'],
            ['code_postal' => 69001, 'ville' => 'Lyon'],
            ['code_postal' => 13001, 'ville' => 'Marseille'],
            ['code_postal' => 33000, 'ville' => 'Bordeaux'],
        ]);
    }
}
