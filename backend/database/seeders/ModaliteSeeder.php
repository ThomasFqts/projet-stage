<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModaliteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('modalite')->insert([
            ['id_modalite' => 1, 'nom_modalite' => 'Sur rendez-vous'],
            ['id_modalite' => 2, 'nom_modalite' => 'Sans rendez-vous'],
            ['id_modalite' => 3, 'nom_modalite' => 'En ligne'],
        ]);
    }
}
