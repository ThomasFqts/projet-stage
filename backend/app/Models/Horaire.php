<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horaire extends Model
{
    use HasFactory;

    protected $fillable = ['jour', 'horaire_ouverture', 'horaire_fermeture'];
    protected $primaryKey = 'id_horaire';
    public $timestamps = false;

    public function centres()
    {
        return $this->belongsToMany(Centre::class, 'centre_horaire', 'id_horaire', 'numero_finess');
    }
}
