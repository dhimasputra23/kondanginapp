<?php

namespace App\Http\Controllers;

use App\Models\ProfilPasangan;
use App\Models\SubAcara;
use App\Models\Musik;
use App\Models\Foto;
use App\Models\FotoBackground;
use App\Models\Quote;
use App\Models\Video;
use App\Models\AlamatGift;
use App\Models\RekeningGift;
use App\Models\Ucapan;
use App\Models\Tamu;

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
       

        $profilPasangans = ProfilPasangan::all();
        $subAcaras = SubAcara::all();
        $musik = Musik::all();
        $fotos = Foto::all();
        $fotoBackgrounds = FotoBackground::all();
        $quote = Quote::all();
        $videos = Video::all();
        $alamatGifts = AlamatGift::all();
        $rekeningGifts = RekeningGift::all();
        $ucapans = Ucapan::orderBy('created_at', 'DESC')->get();
        
        $tamu = Tamu::where('nama', '=', $nama_tamu)->first(); 
        

        $response = ([
            'profilPasangans' => $profilPasangans,
            'subAcaras' => $subAcaras,
            'musik' => $musik,
            'fotos' => $fotos,
            'fotoBackgrounds' => $fotoBackgrounds,
            'quote' => $quote,
            'videos' => $videos,
            'alamatGifts' => $alamatGifts,
            'rekeningGifts' => $rekeningGifts,
            'ucapan' => $ucapans,
            'tamu' => $tamu
            
        ]);

        if ($tamu == null) {
            return $this->respondWithError(256, 404);
        }

        return $this->respond($response,"Success");
        //
    }

    public function submitUcapan($tenant, Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'tamu_id' => 'required',
            'kalimat' => 'required',
            'konfirmasi' => 'required'
        ]);

        $tamu = Tamu::find($request->tamu_id);
        $ucapan = new Ucapan;
        $ucapan->nama = $request->nama;
        $ucapan->kalimat = $request->kalimat;
        $ucapan->konfirmasi = $request->konfirmasi;
        $tamu->ucapan()->save($ucapan);

        return $this->respondWithMessage("Ucapan Successfully Submitted", 200);

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
