<?php

namespace App\Http\Controllers;

use App\Models\FotoBackground;
use App\Http\Requests\StoreFotoBackgroundRequest;
use App\Http\Requests\UpdateFotoBackgroundRequest;

class FotoBackgroundController extends Controller
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
     * @param  \App\Http\Requests\StoreFotoBackgroundRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFotoBackgroundRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FotoBackground  $fotoBackground
     * @return \Illuminate\Http\Response
     */
    public function show(FotoBackground $fotoBackground)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FotoBackground  $fotoBackground
     * @return \Illuminate\Http\Response
     */
    public function edit(FotoBackground $fotoBackground)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFotoBackgroundRequest  $request
     * @param  \App\Models\FotoBackground  $fotoBackground
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFotoBackgroundRequest $request, FotoBackground $fotoBackground)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FotoBackground  $fotoBackground
     * @return \Illuminate\Http\Response
     */
    public function destroy(FotoBackground $fotoBackground)
    {
        //
    }
}
