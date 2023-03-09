<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\cotizaciones;
use Carbon\Carbon;

class CotizacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new cotizaciones();
        $u1->id = 1;
        $u1->comentarios = "Prueba de cotizacion";
        $u1->statusVentas = "venta";
        $u1->fecha_ultima_modificacion = "2020-10-09";
        $u1->venta_id = 1;
        $u1->usuario_id = 1;
        $u1->save();

        $u2 = new cotizaciones();
        $u2->id = 2;
        $u2->statusVentas = "cotizacion";
        $u2->comentarios = "Prueba de cotizacion 1";
        $u2->fecha_ultima_modificacion = "2020-10-09";
        $u2->venta_id = 1;
        $u2->usuario_id = 2;
        $u2->save();

        $u3 = new cotizaciones();
        $u3->id = 3;
        $u3->statusVentas = "venta";
        $u3->comentarios = "Prueba de cotizacion";
        $u3->fecha_ultima_modificacion = "2020-10-09";
        $u3->venta_id = 2;
        $u3->usuario_id = 3;
        $u3->save();

        $u4 = new cotizaciones();
        $u4->id = 4;
        $u4->statusVentas = "cotizacion";
        $u4->comentarios = "Prueba de cotizacion 2";
        $u4->fecha_ultima_modificacion = "2020-10-09";
        $u4->venta_id = 3;
        $u4->usuario_id = 4;
        $u4->save();
    }
}
