<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','nombre', 'contraseña', 'telefono', 'direccion', 'email', 'fecha_cumpleaños', 'tipo'
    ];

    public function carritos_compras(){
        return $this->hasMany(carritos_compras::class);
    }

    public function compras_usuarios(){
        return $this->hasMany(compras_usuarios::class);
    }

    public function cotizaciones(){
        return $this->hasMany(cotizaciones::class);
    }

    public function descuentos(){
        return $this->hasMany(descuentos::class);
    }

}
