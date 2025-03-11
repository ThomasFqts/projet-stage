<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CentreHoraire extends Model
{
    protected $table = 'centre_horaire';
    protected $primaryKey = ['numero_finess', 'id_horaire'];
    public $incrementing = false;
    public $timestamps = false;
}
