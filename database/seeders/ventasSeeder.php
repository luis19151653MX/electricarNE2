<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ventas;
use Carbon\Carbon;

class ventasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new ventas();
        $u1->id = 1;
        $u1->pv_id = 1;
        $u1->compra_usuario_id = 1;
        $u1->fecha = "2020-02-04";
        $u1->save();

        $u2 = new ventas();
        $u2->id = 2;
        $u2->pv_id = 2;
        $u2->compra_usuario_id = 2;
        $u2->fecha = "2020-02-08";
        $u2->save();

        $u2 = new ventas();
        $u2->id = 3;
        $u2->pv_id = 1;
        $u2->compra_usuario_id = 3;
        $u2->fecha = "2020-02-04";
        $u2->save();
    }
}
