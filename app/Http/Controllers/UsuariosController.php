<?php

namespace App\Http\Controllers;

use App\Models\usuarios;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UsuariosController extends Controller
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
            'nombre' => 'required|max:100',
            'contraseña' => 'required|min:8',
            'telefono' => 'required|max:12',
            'direccion' => 'required|max:200',
            'email' => 'required|max:200',
            'fecha_cumpleaños' => 'required|max:20',
            'tipo' => ['required',Rule::in(['prospecto', 'cliente'])]
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        $usuarios = usuarios::create([
            'nombre' => $request->nombre,
            'contraseña' => $request->contraseña,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
            'email' => $request->email,
            'fecha_cumpleaños' => $request->fecha_cumpleaños,
            'tipo' => $request->tipo

        ]);
        $usuarios->save();
    }

    public function c(){
        $c1=new usuarios();
        $c1->id=1;
        $c1->nombre='cass';
        $c1->contraseña='cdevfrtg';
        $c1->telefono='4491020947';
        $c1->direccion='fray luis de leon';
        $c1->email='cass@gmail.com';
        $c1->fecha_cumpleaños='2001-01-01';
        $c1->tipo='cliente';
        $c1->save();
        return $c1;
    }

    public function login(){

    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function show(usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function edit(usuarios $usuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, usuarios $usuarios)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy(usuarios $usuarios)
    {
        //
    }
}
