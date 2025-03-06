<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Adresse extends Model
{
    use HasFactory;

    protected $table = 'adresse';
    protected $primaryKey = 'code_postal';
    public $incrementing = false; // Empêche l'auto-incrémentation car `code_postal` est une clé primaire manuelle
    protected $fillable = ['code_postal', 'ville'];

    public function centres() {
        return $this->hasMany(Centre::class, 'code_postal', 'code_postal');
    }
}
