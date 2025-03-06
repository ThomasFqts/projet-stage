<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Modalite extends Model
{
    use HasFactory;

    protected $table = 'modalite';
    protected $primaryKey = 'id_modalite';
    protected $fillable = ['nom_modalite'];

    public function centres() {
        return $this->belongsToMany(Centre::class, 'centre_modalite', 'id_modalite', 'numero_finess');
    }
}
