<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class centre_modalite extends Model
{
    protected $table = 'centre_modalite';
    protected $primaryKey = ['numero_finess', 'id_modalite'];
    public $incrementing = false;
}
