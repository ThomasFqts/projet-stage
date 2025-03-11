<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CentreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('centres')->insert([
            [
                'numero_finess' => 123456789,
                'nom' => 'Centre de Santé Paris',
                'site_web' => 'https://centre-paris.fr',
                'numero_telephone' => '0123456789',
                'adresse_mail' => 'contact@centre-paris.fr',
                'coordonnee_geographique' => '48.8566,2.3522',
                'adresse' => '1 rue de la santé',
                'code_postal' => 75001
            ],
            [
                'numero_finess' => 987654321,
                'nom' => 'Centre de Santé Lyon',
                'site_web' => 'https://centre-lyon.fr',
                'numero_telephone' => '0456789012',
                'adresse_mail' => 'contact@centre-lyon.fr',
                'coordonnee_geographique' => '45.7640,4.8357',
                'adresse' => '2 avenue des hôpitaux',
                'code_postal' => 69001
            ]
        ]);
    }
}
