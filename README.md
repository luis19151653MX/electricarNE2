## Crear proyecto via composer
composer create-project --prefer-dist laravel/laravel negociosE 8.3.0

##github o puedes usar git lens
echo "# electricarNE2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/luis19151653MX/electricarNE2.git
git push -u origin main

##### modificar 
welcome.blade, tambien en resources app.js y crear Main.js

#para instalarlo en una maquina
npm uninstall cross-env
npm install --global cross-env
npm install --no-bin-links
npm install
composer install
cp .env.example .env
php artisan key:generate
finalmente npm run watch
-< instalar dependencias necesarias como paypal: npm install @paypal/react-paypal-js>


##### esto es para cuando se crea por primera vez en tu maquina
npm install
composer install
composer update
composer require laravel/ui ^3.4
php artisan ui react
npm run watch **aqui es psoible si salen errores usar npm audit fix
npm install react-bootstrap bootstrap

##### instalar dependencias
npm install react-router-dom@6.4.1
//react router dom y axios
npm install axios
npm add react-router-dom 

##### uso de paypal
npm install @paypal/react-paypal-js
correo: electricar19151653@gmail.com
contraseña paypal: electricar@
https://developer.paypal.com/dashboard/ aqui puedes ver tus credenciles de prueba
y agregas el script al body de welcome blade: 
<script src="https://www.paypal.com/sdk/js?client-id=ATopRVi_zcgIG4KmDjOQUzpKCm2yqwnNN4Zcon2ETEwWn2Q95xtM7SYeIHxuDUeusD_6GRxnFy6AMPhS"></script>
Cuentas de prueba: https://developer.paypal.com/dashboard/accounts?event=createSuccess
en este caso puedes usar esta: usuarioelectricar@gmail.com contraseña:electricar@

##conexion local

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=electricarne2
DB_USERNAME=root
DB_PASSWORD=

#Conexion a DB4free, la cuenta es de yahir
https://www.db4free.net/phpMyAdmin/index.php?route=/&reload=1
usuario: root_12
pass: root1234


correo de yahir
DB_CONNECTION=mysql
DB_HOST=db4free.net
DB_PORT=3306
DB_DATABASE=negocios2
DB_USERNAME=root_12
DB_PASSWORD=root1234

##ejecutar migraciones
php artisan migrate:fresh //obtienes una nueva version de la base de datos
php artisan db:seed 





