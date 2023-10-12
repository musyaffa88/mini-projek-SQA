<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use App\Models\Platform;
use App\Http\Requests\StorePelangganRequest;
use App\Http\Requests\UpdatePelangganRequest;
use App\Models\InteraksiPeltoPl;
use App\Models\InteraksiPltoPel;

class PelangganController extends Controller
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
     * @param  \App\Http\Requests\StorePelangganRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePelangganRequest $request)
    {
        $this->validate($request,[
            'nama'=>'required|max:255',
            'deskripsi'=>'required',
            'platform_id'=>'required'
        ]);
        Pelanggan::create([
            'nama'=> $request->nama,
            'deskripsi'=> $request->deskripsi,
            'platform_id'=> $request->platform_id
        ]);
        return back()->with('success','Pelanggan baru berhasil dibuat!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function show(Pelanggan $pelanggan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pelanggan $pelanggan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePelangganRequest  $request
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePelangganRequest $request, Pelanggan $pelanggan, $id)
    {
        $this->validate($request,[
            'nama'=>'required|max:255',
            'deskripsi'=>'required',
            'platform_id'=>'required'
        ]);

        $pelanggan = Pelanggan::find($id);
        $pelanggan->nama = $request->nama;
        $pelanggan->deskripsi = $request->deskripsi;
        $pelanggan->platform_id = $request->platform_id;
        $pelanggan->save();
        return back()->with('success','Data Pelanggan berhasil diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pelanggan $pelanggan, $id)
    {
        $pelanggan = Pelanggan::find($id);
        $interaksiPltoPel = InteraksiPltoPel::where('pelanggan_id', $id);
        $interaksiPeltoPl = InteraksiPeltoPl::where('pelanggan_id', $id);
        $interaksiPeltoPl->delete();
        $interaksiPltoPel->delete();
        $pelanggan->delete();
        return back()->with('success','Pelanggan berhasil dihapus!');
    }
}
