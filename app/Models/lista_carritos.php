<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lista_carritos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','carrito_id', 'cantidad', 'producto_id', 'status'
    ];

    public function carrito_compras(){
        return $this->belongsTo(carritos_compras::class);
    }

    public function productos(){
        return $this->belongsTo(productos::class);
    }
}
