<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    use HasFactory;

    protected $fillable = ['code_postal', 'ville'];
    protected $primaryKey = 'code_postal';
    public $incrementing = false; // SQLite utilise des INTEGER, pas d’auto-incrémentation
    public $timestamps = false;

    public function centres()
    {
        return $this->hasMany(Centre::class, 'code_postal');
    }
}
