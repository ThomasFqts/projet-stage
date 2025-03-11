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
        Schema::create('centre_horaire', function (Blueprint $table) {
            $table->integer('numero_finess');
            $table->integer('id_horaire');
            $table->primary(['numero_finess', 'id_horaire']);
            $table->foreign('numero_finess')->references('numero_finess')->on('centres')->onDelete('cascade');
            $table->foreign('id_horaire')->references('id_horaire')->on('horaires')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centre_horaire');
    }
};
