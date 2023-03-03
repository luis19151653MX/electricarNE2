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

        $p2 = new productos();
        $p2->id = 2;
        $p2->modelo = "Corolla";
        $p2->descripcion = "El Toyota Corolla se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable. Es uno de los autos insignia de la marca y uno de los referentes en el segmento de los compactos, con una gran popularidad en todo el mundo que viene gracias a la durabilidad, desempeño y calidad.";
        $p2->stock = 10;
        $p2->precio = 390000;
        $p2->marca = "Toyota";
        $p2->categoria = "Automovil";
        $p2->año = 2022;
        $p2->imagen = "https://drive.google.com/uc?id=1KfSc7n_mUfrvlMPjkyx763j3-psEwn3r";
        $p2->tipo = 'pull';
        $p2->save();

        $p3 = new productos();
        $p3->id = 3;
        $p3->modelo = "Audi A3";
        $p3->descripcion = "El Audi A3 es un automóvil del segmento C producido por el fabricante alemán Audi. El diseño del Audi A3 Sportback es deportivo y agresivo en todas sus vistas. Basado en la plataforma modular MQB, ya empleada por el A3 de tercera generación, el A3 Sportback evoluciona su receta con mínimos cambios en tanto a sus medidas. ";
        $p3->stock = 19;
        $p3->precio = 470000;
        $p3->marca = "Audi";
        $p3->categoria = "Automovil";
        $p3->año = 2022;
        $p3->imagen = "https://drive.google.com/uc?id=1E2sr507853zFk71mGCC4Pk9sTm7aMI2l";
        $p3->tipo = 'pull';
        $p3->save();


        $p4 = new productos();
        $p4->id = 4;
        $p4->modelo = "Camaro";
        $p4->descripcion = "Chevrolet Camaro es un icono de deportividad, aerodinámico y alto desempeño, creado para los amantes del performance y la velocidad. El selector de modos de manejo te permite elegir entre modo deportivo, turismo, nieve/hielo y pista, y así personalizar tu experiencia de conducción.";
        $p4->stock = 9;
        $p4->precio = 590000;
        $p4->marca = "Ford";
        $p4->categoria = "Automovil";
        $p4->año = 2022;
        $p4->imagen = "https://drive.google.com/uc?id=1KH-UffDWyI5gB_3Y_t-o7FZ9R8BbdQNA";
        $p4->tipo = 'pull';
        $p4->save();

        $p5 = new productos();
        $p5->id = 5;
        $p5->modelo = "Mercedes S63";
        $p5->descripcion = "El Mercedes-Benz S63 AMG es el menor de los S-AMG y tiene algunas cosas en común con el E63 AMG. Es uno de los coches que lleva el V8 atmosférico más potente del mundo y no lleva el V12 Biturbo del S65.";
        $p5->stock = 10;
        $p5->precio = 500000;
        $p5->marca = "Mercedes";
        $p5->categoria = "Automovil";
        $p5->año = 2022;
        $p5->imagen = "https://drive.google.com/uc?id=1jTY0smzA5Z4Aje6t3Lh4Ui0H2E6cBiiS";
        $p5->tipo = 'pull';
        $p5->save();

        $p6 = new productos();
        $p6->id = 6;
        $p6->modelo = "Sentra";
        $p6->descripcion = "Nissan SENTRA integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.";
        $p6->stock = 10;
        $p6->precio = 590000;
        $p6->marca = "Mercedes";
        $p6->categoria = "Automovil";
        $p6->año = 2022;
        $p6->imagen = "https://drive.google.com/uc?id=1kduuV0kdpqe_kKBMCeU2QtCrGCZAU-4T";
        $p6->tipo = 'pull';
        $p6->save();

        $p7 = new productos();
        $p7->id = 7;
        $p7->modelo = "Fortuner";
        $p7->descripcion = "Fortuner integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.";
        $p7->stock = 10;
        $p7->precio = 600000;
        $p7->marca = "Toyota";
        $p7->categoria = "Camioneta";
        $p7->año = 2022;
        $p7->imagen = "https://drive.google.com/uc?id=1BjPHUXoLS0wXOjZhrYYNpf7Ud8AtJoxo";
        $p7->tipo = 'pull';
        $p7->save();

        $p8 = new productos();
        $p8->id = 8;
        $p8->modelo = "Hillux";
        $p8->descripcion = "Hillux integra avanzados dispositivos que optimizan tu seguridad y la de tus acompañantes ante diversas condiciones de manejo.";
        $p8->stock = 5;
        $p8->precio = 500000;
        $p8->marca = "Toyota";
        $p8->categoria = "Camioneta";
        $p8->año = 2022;
        $p8->imagen = "https://drive.google.com/uc?id=1sx9ivkH6Kh0ORXTy-8bn0_7p8a-1zkNM";
        $p8->tipo = 'pull';
        $p8->save();

        $p9 = new productos();
        $p9->id = 9;
        $p9->modelo = "Jetta";
        $p9->descripcion = "Nuevo Jetta es el acompañante perfecto para llenar tu vida de momentos emocionantes, hazlos aún más increíbles con la potencia que ofrece el eficiente Motor 1.4 L TSI con 150 Hp y 250 Nm.";
        $p9->stock = 10;
        $p9->precio = 290000;
        $p9->marca = "Volkswagen";
        $p9->categoria = "Automovil";
        $p9->año = 2022;
        $p9->imagen = "https://drive.google.com/uc?id=1K_kpS16wn6ix4UG3DMnVC-5F4-xTHySu";
        $p9->tipo = 'pull';
        $p9->save();

        $p10 = new productos();
        $p10->id = 10;
        $p10->modelo = "Tiguan";
        $p10->descripcion = "Te presentamos Nuevo Tiguan, el SUVW que reúne todo lo que tú y tu familia necesitan en seguridad, tecnología y entretenimiento para todos los trayectos juntos.";
        $p10->stock = 10;
        $p10->precio = 590000;
        $p10->marca = "Volkswagen";
        $p10->categoria = "Camioneta";
        $p10->año = 2022;
        $p10->imagen = "https://drive.google.com/uc?id=1cxMxvyPthFup3QRRygTAcoQf0wZ1TUfi";
        $p10->tipo = 'pull';
        $p10->save();

    }
}
