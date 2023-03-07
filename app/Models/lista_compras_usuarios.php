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

    public function compras_usuarios(){
        return $this->belongsTo(compras_usuarios::class);
    }

    public function productos(){
        return $this->belongsTo(productos::class);
    }

    public function descuentos(){
        return $this->belongsTo(descuentos::class);
    }
}
