<?php

namespace App\Http\Controllers;

use App\Models\InteraksiPltoPel;
use App\Models\Indikator;
use App\Http\Requests\StoreInteraksiPltoPelRequest;
use App\Http\Requests\UpdateInteraksiPltoPelRequest;

class InteraksiPltoPelController extends Controller
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
     * @param  \App\Http\Requests\StoreInteraksiPltoPelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInteraksiPltoPelRequest $request)
    {
        $this->validate($request,[
            'platform_id'=>'required',
            'pelanggan_id'=>'required',
            'nilai'=>'required|max:255',
            'moneter'=>'required'
        ]);
        if ($request->moneter === "Iya") {
            InteraksiPltoPel::create([
                'platform_id'=>$request->platform_id,
                'pelanggan_id'=>$request->pelanggan_id,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            Indikator::create([
            'nama'=> $request->nilai,
            'platform_id'=> $request->platform_id
            ]);

            return back()->with('success','Interaksi Platform ke Pelanggan berhasil dibuat dan Value ditambahkan sebagai Indikator!');
        }else {
            InteraksiPltoPel::create([
                'platform_id'=>$request->platform_id,
                'pelanggan_id'=>$request->pelanggan_id,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            return back()->with('success','Interaksi Platform ke Pelanggan berhasil dibuat!');
        }
      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InteraksiPltoPel  $interaksiPltoPel
     * @return \Illuminate\Http\Response
     */
    public function show(InteraksiPltoPel $interaksiPltoPel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InteraksiPltoPel  $interaksiPltoPel
     * @return \Illuminate\Http\Response
     */
    public function edit(InteraksiPltoPel $interaksiPltoPel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInteraksiPltoPelRequest  $request
     * @param  \App\Models\InteraksiPltoPel  $interaksiPltoPel
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInteraksiPltoPelRequest $request, InteraksiPltoPel $interaksiPltoPel, $id)
    {
        $this->validate($request,[
            'platform_id'=>'required',
            'pelanggan_id'=>'required',
            'nilai'=>'required|max:255',
            'moneter'=>'required'
        ]);
        $interaksiPltoPel = InteraksiPltoPel::find($id);
        $interaksiPltoPel->platform_id = $request->platform_id;
        $interaksiPltoPel->pelanggan_id = $request->pelanggan_id;
        $interaksiPltoPel->nilai = $request->nilai;
        $interaksiPltoPel->moneter = $request->moneter;
        $interaksiPltoPel->save();
        return back()->with('success','Data Interaksi Platform ke Pelanggan berhasil diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InteraksiPltoPel  $interaksiPltoPel
     * @return \Illuminate\Http\Response
     */
    public function destroy(InteraksiPltoPel $interaksiPltoPel, $id)
    {
        $interaksiPltoPel = InteraksiPltoPel::find($id);
        $interaksiPltoPel->delete();
        return back()->with('success','Interaksi berhasil dihapus!');
    }
}
