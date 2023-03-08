<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\lista_cotizaciones;
use Carbon\Carbon;

class ListaCotizacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new lista_cotizaciones();
        $u1->id = 1;
        $u1->status = "true";
        $u1->cantidad = 3;
        $u1->cotizacion_id = 1;
        $u1->descuento_id = 1;
        $u1->producto_id = 1;
        $u1->save();

        $u2 = new lista_cotizaciones();
        $u2->id = 2;
        $u2->status = "true";
        $u2->cantidad = 6;
        $u2->cotizacion_id = 2;
        $u2->descuento_id = 2;
        $u2->producto_id = 2;
        $u2->save();

        $u3 = new lista_cotizaciones();
        $u3->id = 3;
        $u3->status = "true";
        $u3->cantidad = 2;
        $u3->cotizacion_id = 3;
        $u3->descuento_id = 2;
        $u3->producto_id = 3;
        $u3->save();

    }
}
