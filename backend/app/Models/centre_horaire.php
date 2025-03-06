<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class centre_horaire extends Model
{
    protected $table = 'centre_horaire';
    protected $primaryKey = ['numero_finess', 'id_horaire'];
    public $incrementing = false;
}
