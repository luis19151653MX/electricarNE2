<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lista_cotizaciones extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','status', 'cantidad', 'cotizacion_id', 'descuentos_id', 'productos_id'
    ];
}
