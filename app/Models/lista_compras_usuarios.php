<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lista_compras_usuarios extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','compra_usuario_id', 'cantidad', 'producto_id', 'codigo'
    ];
}
