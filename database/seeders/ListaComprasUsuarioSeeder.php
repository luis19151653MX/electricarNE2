<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\lista_compras_usuarios;
use Carbon\Carbon;

class ListaComprasUsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new lista_compras_usuarios();
        $u1->id = 1;
        $u1->compra_usuario_id = 1;
        $u1->producto_id = 1;
        $u1->cantidad = 200;
        $u1->codigo = '1001';
        $u1->save();

        $u2 = new lista_compras_usuarios();
        $u2->id = 2;
        $u2->compra_usuario_id = 2;
        $u2->producto_id = 2;
        $u2->cantidad = 200;
        $u2->codigo = '1002';
        $u2->save();

        $u3 = new lista_compras_usuarios();
        $u3->id = 3;
        $u3->compra_usuario_id = 3;
        $u3->producto_id = 3;
        $u3->cantidad = 200;
        $u3->codigo = '1003';
        $u3->save();
    }
}
