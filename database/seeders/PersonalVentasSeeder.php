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

        $p1 = new personal_ventas();
        $p1->id = 2;
        $p1->nombre = "Yair Chávez";
        $p1->telefono = "4491871289";
        $p1->contraseña = "nsuns4xd";
        $p1->email = "yajuu@gmail.com";
        $p1->direccion = "1082 Clinthon Hill, Metropolis";
        $p1->save();

        $p1 = new personal_ventas();
        $p1->id = 3;
        $p1->nombre = "El piojo Alvarado";
        $p1->telefono = "4491981765";
        $p1->contraseña = "nsuns4xd";
        $p1->email = "elpio_jito@gmail.com";
        $p1->direccion = "109 SoyElRatón, Sinaloa";
        $p1->save();
    }
}
