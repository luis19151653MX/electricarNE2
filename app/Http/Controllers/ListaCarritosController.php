<?php

namespace App\Http\Controllers;

use App\Models\lista_carritos;
use App\Models\carritos_compras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ListaCarritosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => 'required',
            'carrito_id' => 'required',
            'cantidad' => 'required|min:1',
            'producto_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $lista_carritos = lista_carritos::create([
            'usuario_id' => $request->usuario_id,
            'carrito_id' => $request->carrito_id,
            'cantidad' => $request->cantidad,
            'producto_id'=>$request->producto_id,
            'status' => 'true'
        ]);
        $lista_carritos->save();
    }

    public function cambioStatus(Request $request){
        $lista_carritos = lista_carritos::where('id', $request->id)->where('status', 'true')->first();
        $lista_carritos->status = 'false';
        $lista_carritos->save();
        return $lista_carritos;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\lista_carritos  $lista_carritos
     * @return \Illuminate\Http\Response
     */
    public function show(lista_carritos $lista_carritos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\lista_carritos  $lista_carritos
     * @return \Illuminate\Http\Response
     */
    public function edit(lista_carritos $lista_carritos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\lista_carritos  $lista_carritos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, lista_carritos $lista_carritos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\lista_carritos  $lista_carritos
     * @return \Illuminate\Http\Response
     */
    public function destroy(lista_carritos $lista_carritos)
    {
        //
    }
}
