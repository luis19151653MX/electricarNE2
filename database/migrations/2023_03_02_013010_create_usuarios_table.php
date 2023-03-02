<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->varchar("nombre");
            $table->varchar("contraseña");
            $table->varchar("telefono");
            $table->varchar("direccion");
            $table->varchar("email");
            $table->date("fecha_cumpleaños");
            $table->enum('tipo',['prospecto','cliente'])->default('prospecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
