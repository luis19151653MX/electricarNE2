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
        
      
        $this->call(UsuariosSeeder::class);
        $this->call(ProductosSeeder::class);
        $this->call(Carritos_comprasSeeder::class);
        $this->call(Lista_carritosSeeder::class);
        $this->call(PersonalVentasSeeder::class);
        $this->call(DescuentosSeeder::class);
        //updates
        $this->call(ComprasUsuarioSeeder::class);
        
        $this->call(ventasSeeder::class);
        $this->call(CotizacionSeeder::class);
        $this->call(ListaComprasUsuarioSeeder::class);
        $this->call(ListaCotizacionSeeder::class);
        
    }
}
