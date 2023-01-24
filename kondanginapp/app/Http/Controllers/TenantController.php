<?php

namespace App\Http\Controllers;

use App\Models\ProfilPasangan;
use App\Models\SubAcara;
use App\Models\Musik;
use App\Models\Foto;
use App\Models\Quote;
use App\Models\Video;
use App\Models\AlamatGift;
use App\Models\RekeningGift;
use App\Models\Ucapan;

use Illuminate\Http\Request;


class TenantController extends Controller
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
    public function show($tenant, $nama_tamu)
    {
        // $undangan = Undangan::where('kode_undangan',$kode_undangan)
        // ->withWhereHas("tamus", function($query) use($nama_tamu) {
        //         $query->where("nama", "like", $nama_tamu);
        //     })
        // ->with('profilpasangans')
        // ->with('subacaras')
        // ->with('musik')
        // ->with('fotos')
        // ->with('quote')
        // ->with('videos')
        // ->with('alamatgifts')
        // ->with('rekeninggifts')
        // ->with('ucapans')
        
        // ->first();

        $profilPasangans = ProfilPasangan::all();
        $subAcaras = SubAcara::all();
        $musik = Musik::all();
        $fotos = Foto::all();
        $quote = Quote::all();
        $videos = Video::all();
        $alamatGifts = AlamatGift::all();
        $rekeningGifts = RekeningGift::all();
        $ucapans = Ucapan::all();
        

        $response = ([
            'profilPasangans' => $profilPasangans,
            'subAcaras' => $subAcaras,
            'musik' => $musik,
            'fotos' => $fotos,
            'quote' => $quote,
            'videos' => $videos,
            'alamatGifts' => $alamatGifts,
            'rekeningGifts' => $rekeningGifts,
            'ucapan' => $ucapans
            
        ]);

        return $this->respond($response,"Success");
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function edit()
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
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Undangan  $undangan
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        //
    }
}
