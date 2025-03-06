<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Centre extends Model
{
    use HasFactory;

    protected $table = 'centre';
    protected $primaryKey = 'numero_finess';
    public $incrementing = false; // Le numéro FINESS est une clé primaire manuelle
    protected $fillable = [
        'numero_finess',
        'nom',
        'site_web',
        'numero_telephone',
        'adresse_mail',
        'coordonnee_geographique',
        'adresse',
        'code_postal'
    ];

    public function adresse() {
        return $this->belongsTo(Adresse::class, 'code_postal', 'code_postal');
    }

    public function horaires() {
        return $this->belongsToMany(Horaire::class, 'centre_horaire', 'numero_finess', 'id_horaire');
    }

    public function modalites() {
        return $this->belongsToMany(Modalite::class, 'centre_modalite', 'numero_finess', 'id_modalite');
    }
}
