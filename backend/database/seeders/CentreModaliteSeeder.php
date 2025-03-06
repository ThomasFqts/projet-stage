<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CentreModaliteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('centre_modalite')->insert([
            ['numero_finess' => 123456789, 'id_modalite' => 1],
            ['numero_finess' => 987654321, 'id_modalite' => 2],
            ['numero_finess' => 987654321, 'id_modalite' => 3],
        ]);
    }
}
