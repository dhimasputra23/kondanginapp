<?php

namespace App\Http\Controllers;

use App\Models\Undangan;
use Illuminate\Http\Request;
use App\Models\Tamu;


class UndanganController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function show($kode_undangan, $nama_tamu)
    {
        $undangan = Undangan::where('kode_undangan',$kode_undangan)
        ->withWhereHas("tamus", function($query) use($nama_tamu) {
                $query->where("nama", "like", $nama_tamu);
            })
        ->with('profilpasangans')
        ->with('subacaras')
        ->with('musik')
        ->with('fotos')
        ->with('quote')
        ->with('videos')
        ->with('alamatgifts')
        ->with('rekeninggifts')
        ->with('ucapans')
        
        ->first();

        return $this->respond($undangan,"Success");
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function edit(Undangan $undangan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Undangan $undangan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Undangan $undangan)
    {
        //
    }
}
