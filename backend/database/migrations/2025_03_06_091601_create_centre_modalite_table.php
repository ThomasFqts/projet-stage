<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('centre_modalite', function (Blueprint $table) {
            $table->integer('numero_finess');
            $table->integer('id_modalite');

            // Clés étrangères
            $table->foreign('numero_finess')->references('numero_finess')->on('centre')->onDelete('cascade');
            $table->foreign('id_modalite')->references('id_modalite')->on('modalite')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centre_modalite');
    }
};
