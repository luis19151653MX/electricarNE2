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

    public function usuarios(){
        return $this->belongsTo(usuarios::class);
    }

    public function lista_compras_usuarios(){
        return $this->hasMany(lista_compras_usuarios::class);
    }

    public function ventas(){
        return $this->hasOne(ventas::class);
    }

}
