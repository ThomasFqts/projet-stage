<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modalite extends Model
{
    use HasFactory;

    protected $fillable = ['nom_modalite'];
    protected $primaryKey = 'id_modalite';
    public $timestamps = false;

    public function centres()
    {
        return $this->belongsToMany(Centre::class, 'centre_modalite', 'id_modalite', 'numero_finess');
    }
}
