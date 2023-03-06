<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cotizaciones extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','comentarios', 'fecha_ultima_modificacion', 'venta_id', 'usuario_id', 'producto_id'
    ];
}
