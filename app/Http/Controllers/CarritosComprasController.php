<?php

namespace App\Http\Controllers;

use App\Models\carritos_compras;
use App\Models\lista_carritos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Validator;

class CarritosComprasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
    public function index(Request $request)
    {
        $lista = lista_carritos::where('carrito_id', $request->carrito_id)->where('status', 'true')->get();
        return $lista;
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
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $carritos_compras = carritos_compras::create([
            'usuario_id' => $request->usuario_id,
            'status' => 'true',
            'fecha_ultima_modificacion' => now(),
            'statusVenta' => 'cotizacion'
        ]);
        $carritos_compras->save();
    }


    public function cambioStatus(Request $request){
        $carritos_compras = carritos_compras::where('id', $request->id)->where('status', 'true')->first();
        $carritos_compras->status = 'false';
        $carritos_compras->save();
        return $carritos_compras;
    }

    public function cambioStatusVenta(Request $request){
        $carritos_compras = carritos_compras::where('id', $request->id)->where('status', 'true')->where('statusVenta', 'cotización')->first();
        $carritos_compras->status = 'false';
        $carritos_compras->statusVenta = 'venta';
        $carritos_compras->save();
        return $carritos_compras;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\carritos_compras  $carritos_compras
     * @return \Illuminate\Http\Response
     */
    public function show(carritos_compras $carritos_compras)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\carritos_compras  $carritos_compras
     * @return \Illuminate\Http\Response
     */
    public function edit(carritos_compras $carritos_compras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\carritos_compras  $carritos_compras
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, carritos_compras $carritos_compras)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\carritos_compras  $carritos_compras
     * @return \Illuminate\Http\Response
     */
    public function destroy(carritos_compras $carritos_compras)
    {
        //
    }
}
