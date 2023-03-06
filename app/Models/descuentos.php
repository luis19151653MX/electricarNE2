<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class descuentos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','codigo', 'porcentaje', 'fecha_caducidad', 'pv_id', 'usuario_id'
    ];
}
