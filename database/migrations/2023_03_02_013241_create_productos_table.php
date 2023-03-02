<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string("modelo");
            $table->text("descripcion");
            $table->integer("stock");
            $table->integer("precio");
            $table->string("marca");
            $table->string("categoria");
            $table->date("año");
            $table->text("imagen");
            $table->enum('tipo',['pull','push'])->default('push');
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
        Schema::dropIfExists('productos');
    }
}
