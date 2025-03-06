<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Horaire extends Model
{
    use HasFactory;

    protected $table = 'horaire';
    protected $primaryKey = 'id_horaire';
    protected $fillable = ['jour', 'horaire_ouverture', 'horaire_fermeture'];

    public function centres() {
        return $this->belongsToMany(Centre::class, 'centre_horaire', 'id_horaire', 'numero_finess');
    }
}
