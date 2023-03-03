<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\productos;
use Carbon\Carbon;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p1 = new productos();
        $p1->id = 1;
        $p1->modelo = "Mercedes A3";
        $p1->descripcion = "El Mercedes Clase A es el compacto por excelencia de la marca alemana. En su cuarta generación nos encontramos con un vehículo con una imagen nueva, moderna y más tecnológica. El Clase A mejora en espacio a bordo y calidad de sus materiales. El diseño del nuevo Clase A es una clara evolución del diseño anterior. Las mismas formas adaptadas con los últimos matices estéticos de la marca, dotando de un gran protagonismo a sus ópticas, que siguen el camino trazado por el nuevo Mercedes CLS.";
        $p1->stock = 10;
        $p1->precio = 590000;
        $p1->marca = "Mercedes";
        $p1->categoria = "Automovil";
        $p1->año = 2022;
        $p1->imagen = "https://drive.google.com/uc?id=1gwt6da6CtaczVQRUVhnDb_DEkRC4zHN6";
        $p1->tipo = 'pull';
        $p1->save();

        $p1 = new productos();
        $p1->id = 2;
        $p1->modelo = "Corolla";
        $p1->descripcion = "El Toyota Corolla se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable. Es uno de los autos insignia de la marca y uno de los referentes en el segmento de los compactos, con una gran popularidad en todo el mundo que viene gracias a la durabilidad, desempeño y calidad.";
        $p1->stock = 10;
        $p1->precio = 390000;
        $p1->marca = "Toyota";
        $p1->categoria = "Automovil";
        $p1->año = 2022;
        $p1->imagen = "https://drive.google.com/uc?id=1KfSc7n_mUfrvlMPjkyx763j3-psEwn3r";
        $p1->tipo = 'pull';
        $p1->save();
    }
}
