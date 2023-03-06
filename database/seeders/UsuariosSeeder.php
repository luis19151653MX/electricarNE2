<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\usuarios;
use Carbon\Carbon;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u1 = new usuarios();
        $u1->id = 1;
        $u1->nombre = "Saúl Mascorro";
        $u1->contraseña = "mascorrosaul";
        $u1->telefono = 4494480690;
        $u1->direccion = "La luna #108";
        $u1->email = "smascorro2001@gmail.com";
        $u1->fecha_cumpleaños = "2001-09-23";
        $u1->tipo = 'prospecto';
        $u1->save();

        $u2 = new usuarios();
        $u2->id = 2;
        $u2->nombre = "Diana De Alba";
        $u2->contraseña = "dealbadiana";
        $u2->telefono = 4491234567;
        $u2->direccion = "Roble #25 PP";
        $u2->email = "dealbadiana2001@gmail.com";
        $u2->fecha_cumpleaños = "2001-07-14";
        $u2->tipo = 'prospecto';
        $u2->save();

        $u3 = new usuarios();
        $u3->id = 3;
        $u3->nombre = "Ricardo Enrique";
        $u3->contraseña = "enriquericardo";
        $u3->telefono = 4492046425;
        $u3->direccion = "La luna #108";
        $u3->email = "reml1995@gmail.com";
        $u3->fecha_cumpleaños = "1995-09-05";
        $u3->tipo = 'prospecto';
        $u3->save();

    }
}
