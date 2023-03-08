<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\descuentos;
use Carbon\Carbon;

class DescuentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $d1 = new descuentos();
        $d1->id = 1;
        $d1->codigo = "1001";
        $d1->porcentaje = "10";
        $d1->fecha_caducidad = "2023-06-12";
        $d1->pv_id = "3";
        $d1->usuario_id = "1";
        $d1->status = "A";
        $d1->save();

        $d2 = new descuentos();
        $d2->id = 2;
        $d2->codigo = "1002";
        $d2->porcentaje = "20";
        $d2->fecha_caducidad = "2023-03-09";
        $d2->pv_id = "1";
        $d2->usuario_id = "2";
        $d2->status = "I";
        $d2->save();

        $d3 = new descuentos();
        $d3->id = 3;
        $d3->codigo = "1003";
        $d3->porcentaje = "30";
        $d3->fecha_caducidad = "2023-03-12";
        $d3->pv_id = "2";
        $d3->usuario_id = "3";
        $d3->status = "A";
        $d3->save();
    }
}
