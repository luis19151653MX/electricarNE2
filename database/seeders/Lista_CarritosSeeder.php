<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\lista_carritos;
use Carbon\Carbon;

class Lista_carritosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Lc1 = new lista_carritos();
        $Lc1->id = 1;
        $Lc1->carrito_id ="1";
        $Lc1->producto_id ="1";
        $Lc1->cantidad = "1";
        $Lc1->status = "false";
        $Lc1->save();

        $Lc2 = new lista_carritos();
        $Lc2->id = 2;
        $Lc2->carrito_id ="1";
        $Lc2->producto_id ="4";
        $Lc2->cantidad = "1";
        $Lc2->status = "true";
        $Lc2->save();

        $Lc3 = new lista_carritos();
        $Lc3->id = 3;
        $Lc3->carrito_id ="1";
        $Lc3->producto_id ="9";
        $Lc3->cantidad = "1";
        $Lc3->status = "true";
        $Lc3->save();

        $Lc4 = new lista_carritos();
        $Lc4->id = 4;
        $Lc4->carrito_id ="2";
        $Lc4->producto_id ="8";
        $Lc4->cantidad = "1";
        $Lc4->status = "true";
        $Lc4->save();

        $Lc5 = new lista_carritos();
        $Lc5->id = 5;
        $Lc5->carrito_id ="2";
        $Lc5->producto_id ="3";
        $Lc5->cantidad = "1";
        $Lc5->status = "true";
        $Lc5->save();

        $Lc6 = new lista_carritos();
        $Lc6->id = 6;
        $Lc6->carrito_id ="2";
        $Lc6->producto_id ="7";
        $Lc6->cantidad = "1";
        $Lc6->status = "true";
        $Lc6->save();

        $Lc7 = new lista_carritos();
        $Lc7->id = 7;
        $Lc7->carrito_id ="3";
        $Lc7->producto_id ="6";
        $Lc7->cantidad = "1";
        $Lc7->status = "true";
        $Lc7->save();

        $Lc8 = new lista_carritos();
        $Lc8->id = 8;
        $Lc8->carrito_id ="3";
        $Lc8->producto_id ="1";
        $Lc8->cantidad = "1";
        $Lc8->status = "true";
        $Lc8->save();

        $Lc9 = new lista_carritos();
        $Lc9->id = 9;
        $Lc9->carrito_id ="3";
        $Lc9->producto_id ="9";
        $Lc9->cantidad = "1";
        $Lc9->status = "true";
        $Lc9->save();

       
    }
}