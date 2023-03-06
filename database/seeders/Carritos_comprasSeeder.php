<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\carritos_compras;
use Carbon\Carbon;

class Carritos_comprasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Cc1 = new carritos_compras();
        $Cc1->id = 1;
        $Cc1->usuario_id = "1";
        $Cc1->status = "true";
        $Cc1->fecha_ultima_modificacion = "2021-02-12";
     
        $Cc1->save();
        
        $Cc2 = new carritos_compras();
        $Cc2->id =2;
        $Cc2->usuario_id = "3";
        $Cc2->status = "false";
        $Cc2->fecha_ultima_modificacion = "2021-02-12";
       
      
        $Cc2->save();

        $Cc3 = new carritos_compras();
        $Cc3->id = 3;
        $Cc3->usuario_id = "2";
        $Cc3->status = "true";
        $Cc3->fecha_ultima_modificacion = "2021-02-12";
     
        $Cc3->save();

       
    }
}