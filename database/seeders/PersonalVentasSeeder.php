<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\personal_ventas;
use Carbon\Carbon;

class PersonalVentasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p1 = new personal_ventas();
        $p1->id = 1;
        $p1->nombre = "Juanito Limones";
        $p1->telefono = "4951032190";
        $p1->contraseña = "nsuns4xd";
        $p1->email = "juANITow@gmail.com";
        $p1->direccion = "1033 Mountain Drive, Gotham City";
        $p1->save();

        $p2 = new personal_ventas();
        $p2->id = 2;
        $p2->nombre = "Yair Chávez";
        $p2->telefono = "4491871289";
        $p2->contraseña = "nsuns4xd";
        $p2->email = "yajuu@gmail.com";
        $p2->direccion = "1082 Clinthon Hill, Metropolis";
        $p2->save();

        $p3 = new personal_ventas();
        $p3->id = 3;
        $p3->nombre = "El piojo Alvarado";
        $p3->telefono = "4491981765";
        $p3->contraseña = "nsuns4xd";
        $p3->email = "elpio_jito@gmail.com";
        $p3->direccion = "109 SoyElRatón, Sinaloa";
        $p3->save();
    }
}
