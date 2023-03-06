<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_ventas', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");
            $table->string("contraseña");
            $table->string("telefono")->unique();;
            $table->string("direccion");
            $table->string("email")->unique();;
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
        Schema::dropIfExists('personal_ventas');
    }
}
