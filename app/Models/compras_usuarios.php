<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class compras_usuarios extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','usuario_id', 'total', 'fecha_ultima_modificacion'
    ];
}
