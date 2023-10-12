<?php

namespace App\Http\Controllers;

use App\Models\InteraksiPeltoPl;
use App\Models\Indikator;
use App\Http\Requests\StoreInteraksiPeltoPlRequest;
use App\Http\Requests\UpdateInteraksiPeltoPlRequest;

class InteraksiPeltoPlController extends Controller
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
     * @param  \App\Http\Requests\StoreInteraksiPeltoPlRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInteraksiPeltoPlRequest $request)
    {
        $this->validate($request,[
            'platform_id'=>'required',
            'pelanggan_id'=>'required',
            'nilai'=>'required|max:255',
            'moneter'=>'required'
        ]);
        if ($request->moneter === 'Iya') {
            InteraksiPeltoPl::create([
                'pelanggan_id'=>$request->pelanggan_id,
                'platform_id'=>$request->platform_id,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            Indikator::create([
                'nama'=> $request->nilai,
                'platform_id'=> $request->platform_id
            ]);
            return back()->with('success','Interaksi Pelanggan ke Platform berhasil dibuat dan Value ditambahkan sebagai Indikator!');
        }
        else {
            InteraksiPeltoPl::create([
                'pelanggan_id'=>$request->pelanggan_id,
                'platform_id'=>$request->platform_id,
                'nilai'=>$request->nilai,
                'moneter'=>$request->moneter
            ]);
            return back()->with('success','Interaksi Pelanggan ke Platform berhasil dibuat!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InteraksiPeltoPl  $interaksiPeltoPl
     * @return \Illuminate\Http\Response
     */
    public function show(InteraksiPeltoPl $interaksiPeltoPl)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\InteraksiPeltoPl  $interaksiPeltoPl
     * @return \Illuminate\Http\Response
     */
    public function edit(InteraksiPeltoPl $interaksiPeltoPl)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInteraksiPeltoPlRequest  $request
     * @param  \App\Models\InteraksiPeltoPl  $interaksiPeltoPl
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInteraksiPeltoPlRequest $request, InteraksiPeltoPl $interaksiPeltoPl, $id)
    {
        $this->validate($request,[
            'pelanggan_id'=>'required',
            'platform_id'=>'required',
            'nilai'=>'required|max:255',
            'moneter'=>'required'
        ]);
        $interaksiPeltoPl = InteraksiPeltoPl::find($id);
        $interaksiPeltoPl->pelanggan_id = $request->pelanggan_id;
        $interaksiPeltoPl->platform_id = $request->platform_id;
        $interaksiPeltoPl->nilai = $request->nilai;
        $interaksiPeltoPl->moneter = $request->moneter;
        $interaksiPeltoPl->save();
        return back()->with('success','Data Interaksi Platform ke Pelanggan berhasil diupdate!');
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InteraksiPeltoPl  $interaksiPeltoPl
     * @return \Illuminate\Http\Response
     */
    public function destroy(InteraksiPeltoPl $interaksiPeltoPl, $id)
    {
        $interaksiPeltoPl = InteraksiPeltoPl::find($id);
        $interaksiPeltoPl->delete();
        return back()->with('success','Interaksi berhasil dihapus!');
    }
}
