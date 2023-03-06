<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ventas extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','fecha', 'pv_id', 'compra_usuario_id'
    ];

    public function compras_usuarios(){
        return $this->hasOne(compras_usuarios::class);
    }

    public function personal_ventas(){
        return $this->belongsTo(personal_ventas::class);
    }

    public function cotizaciones(){
        return $this->belongsTo(cotizaciones::class);
    }
}
