<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class descuentos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','codigo', 'porcentaje', 'fecha_caducidad', 'pv_id', 'usuario_id', 'status'
    ];

    public function personal_ventas(){
        return $this->belongsTo(personal_ventas::class);
    }

    public function usuarios(){
        return $this->belongsTo(usuarios::class);
    }
}
