<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CentreModalite extends Model
{
    protected $table = 'centre_modalite';
    protected $primaryKey = ['numero_finess', 'id_modalite'];
    public $incrementing = false;
    public $timestamps = false;
}
