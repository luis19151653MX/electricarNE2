<?php

use App\Http\Controllers\ProductosController;
use App\Http\Controllers\UsuariosController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/index_productos', [ProductosController::class,'index']);
Route::post('/get_producto', [ProductosController::class,'getProducto']);
Route::post('/show_usuarios', [UsuariosController::class,'getUsuario']);

Route::post('/store_usuarios', [UsuariosController::class,'store']);
//Route::get('/c_usuarios', [UsuariosController::class,'c']);
Route::post('/login', [UsuariosController::class, 'login']);


Route::post('/index_usuarios', [UsuariosController::class,'index']);


