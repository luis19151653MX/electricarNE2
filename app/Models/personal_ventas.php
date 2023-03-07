<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class personal_ventas extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','nombre', 'contraseña', 'telefono', 'direccion', 'email'
    ];

    public function ventas(){
        return $this->hasMany(ventas::class);
    }
    
    public function descuentos(){
        return $this->hasMany(descuentos::class);
    }
}
