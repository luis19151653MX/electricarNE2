<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','modelo', 'descripcion', 'stock', 'precio', 'marca', 'categoria', 'año', 'imagen', 'tipo'
    ];

    public function lista_carritos(){
        return $this->hasMany(lista_carritos::class);
    }

    public function listas_compras_usuarios(){
        return $this->hasMany(lista_compras_usuarios::class);
    }

    public function lista_cotizaciones(){
        return $this->hasMany(lista_cotizaciones::class);
    }

   
}
