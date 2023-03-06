<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carritos_compras extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id','usuario_id', 'status', 'fecha_ultima_modificacion'
    ];

    public function lista_carritos(){
        return $this->hasMany(lista_carritos::class);
    }

    public function usuarios(){
        return $this->belongsTo(usuarios::class);
    }
}
