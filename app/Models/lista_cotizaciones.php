<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lista_cotizaciones extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','status', 'cantidad', 'cotizacion_id', 'descuento_id', 'producto_id'
    ];

    public function cotizaciones(){
        return $this->belongsTo(cotizaciones::class);
    }

    public function descuentos(){
        return $this->belongsTo(descuentos::class);
    }

    public function productos(){
        return $this->belongsTo(productos::class);
    }
}
