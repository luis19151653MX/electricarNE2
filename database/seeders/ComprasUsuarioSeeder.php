<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\compras_usuarios;
use Carbon\Carbon;

class ComprasUsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new compras_usuarios();
        $u1->id = 1;
        $u1->usuario_id = 1;
        $u1->total = 12000;
        $u1->fecha_ultima_modificacion = "2020-02-04";
        $u1->save();

        $u2 = new compras_usuarios();
        $u2->id = 2;
        $u2->usuario_id = 3;
        $u2->total = 25500;
        $u2->fecha_ultima_modificacion = "2020-02-04";
        $u2->save();

        $u3 = new compras_usuarios();
        $u3->id = 3;
        $u3->usuario_id = 2;
        $u3->total = 2310;
        $u3->fecha_ultima_modificacion = "2020-02-04";
        $u3->save();
    }
}
