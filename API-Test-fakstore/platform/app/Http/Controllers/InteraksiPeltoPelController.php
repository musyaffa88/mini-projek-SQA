<?php

namespace App\Http\Controllers;

use App\Models\InteraksiPeltoPel;
use App\Models\Indikator;
use App\Http\Requests\StoreInteraksiPeltoPelRequest;
use App\Http\Requests\UpdateInteraksiPeltoPelRequest;

class InteraksiPeltoPelController extends Controller
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
     * @param  \App\Http\Requests\StoreInteraksiPeltoPelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInteraksiPeltoPelRequest $request)
    {
        $this->validate($request,[
            'platform_id'=>'required',
            'asal'=>'required',
            'tujuan'=>'required',
            'nilai'=>'required|max:255',
            'moneter'=>'required'
        ]);
        if ($request->moneter === 'Iya') {
            InteraksiPeltoPel::create([
                'platform_id'=>$request->platform_id,
                'asal'=>$request->asal,
                'tujuan'=>$request->tujuan,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            Indikator::create([
                'nama'=> $request->nilai,
                'platform_id'=> $request->platform_id
            ]);
            return back()->with('success','Interaksi Pelanggan ke Pelanggan berhasil dibuat dan Value ditambahkan sebagai Indikator!');
        }
        else {
            InteraksiPeltoPel::create([
                'platform_id'=>$request->platform_id,
                'asal'=>$request->asal,
                'tujuan'=>$request->tujuan,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            return back()->with('success','Interaksi Pelanggan ke Pelanggan berhasil dibuat!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InteraksiPeltoPel  $interaksiPeltoPel
     * @return \Illuminate\Http\Response
     */
    public function show(InteraksiPeltoPel $interaksiPeltoPel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InteraksiPeltoPel  $interaksiPeltoPel
     * @return \Illuminate\Http\Response
     */
    public function edit(InteraksiPeltoPel $interaksiPeltoPel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInteraksiPeltoPelRequest  $request
     * @param  \App\Models\InteraksiPeltoPel  $interaksiPeltoPel
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInteraksiPeltoPelRequest $request, InteraksiPeltoPel $interaksiPeltoPel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InteraksiPeltoPel  $interaksiPeltoPel
     * @return \Illuminate\Http\Response
     */
    public function destroy(InteraksiPeltoPel $interaksiPeltoPel, $id)
    {
        $interaksiPeltoPel = InteraksiPeltoPel::find($id);
        $interaksiPeltoPel->delete();
        return back()->with('success','Interaksi berhasil dihapus!');
    }
}
