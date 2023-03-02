<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_compras', function (Blueprint $table) {
            $table->id();
            $table->varchar("nombre");
            $table->varchar("contraseña");
            $table->varchar("telefono");
            $table->varchar("direccion");
            $table->varchar("email");
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
        Schema::dropIfExists('personal_compras');
    }
}
