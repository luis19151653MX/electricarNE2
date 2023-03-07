<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
<<<<<<< HEAD
      // $this->call(ProductosSeeder::class);
        
       // $this->call(UsuariosSeeder::class);
        $this->call(Carritos_comprasSeeder::class);
        $this->call(Lista_carritosSeeder::class);
=======
        $this->call(ProductosSeeder::class);
        $this->call(UsuariosSeeder::class);
>>>>>>> 40b7e8851c8607e6686f20ba96e73e7c6c190b6a
    }
}
