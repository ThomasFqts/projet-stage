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
        DB::table('modalites')->insert([
            ['nom_modalite' => 'Hémodialyse en centre pour adulte'],
            ['nom_modalite' => 'Hémodialyse en unité de dialyse médicalisée'],
            ['nom_modalite' => 'Hémodialyse à domicile'],
            ['nom_modalite' => 'Hémodialyse longue nocturne'],
        ]);
    }
}
