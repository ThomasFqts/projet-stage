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
        Schema::create('centres', function (Blueprint $table) {
            $table->integer('numero_finess')->primary();
            $table->string('nom');
            $table->string('site_web')->nullable();
            $table->string('numero_telephone');
            $table->string('adresse_mail');
            $table->string('coordonnee_geographique')->nullable();
            $table->string('adresse');
            $table->integer('code_postal');
            $table->foreign('code_postal')->references('code_postal')->on('adresses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centres');
    }
};
