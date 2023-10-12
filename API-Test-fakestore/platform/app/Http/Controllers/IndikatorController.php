<?php

namespace App\Http\Controllers;

use App\Models\Indikator;
use App\Models\DataIndikator;
use App\Models\Platform;
use App\Models\Fasilitator;
use App\Http\Requests\StoreIndikatorRequest;
use App\Http\Requests\UpdateIndikatorRequest;

class IndikatorController extends Controller
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
     * @param  \App\Http\Requests\StoreIndikatorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreIndikatorRequest $request)
    {
        $this->validate($request,[
            'nama'=>'required|max:255',
            'platform_id'=>'required'
        ]);
        Indikator::create([
            'nama'=> $request->nama,
            'deskripsi'=> $request->deskripsi,
            'platform_id'=> $request->platform_id
        ]);
        return back()->with('success','Indikator baru berhasil dibuat!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Indikator  $indikator
     * @return \Illuminate\Http\Response
     */
    public function show(Indikator $indikator, $id)
    {
        $platform = Platform::find($id);
        $indikator = Indikator::where('platform_id', $id)->get();
        $fasilitator = Fasilitator::all();
        return view('klien.indikatorklien',[
            'title'=>'Indikator Platform',
            'platform'=> $platform,
            'fasilitator'=>$fasilitator,
            'indikator' =>$indikator
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Indikator  $indikator
     * @return \Illuminate\Http\Response
     */
    public function showIndikator(Indikator $indikator, $id)
    {
        $platform = Platform::find($id);
        $indikator = Indikator::where('platform_id', $id)->get();
        $fasilitator = Fasilitator::all();
        return view('klien.dashboardklien',[
            'title'=>'Dashboard Platform',
            'platform'=> $platform,
            'fasilitator'=>$fasilitator,
            'indikator' =>$indikator
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateIndikatorRequest  $request
     * @param  \App\Models\Indikator  $indikator
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateIndikatorRequest $request, Indikator $indikator, $id)
    {
        $this->validate($request,[
            'nama'=>'required|max:255',
            'platform_id'=>'required'
        ]);

        $indikator = Indikator::find($id);
        $indikator->nama = $request->nama;
        $indikator->deskripsi = $request->deskripsi;
        $indikator->platform_id = $request->platform_id;
        $indikator->save();
        return back()->with('success','Indikator berhasil diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Indikator  $indikator
     * @return \Illuminate\Http\Response
     */
    public function destroy(Indikator $indikator, $id)
    {
        $indikator = Indikator::find($id);
        $dataIndikator = DataIndikator::where('indikator_id',$id)->get();
        $countDataIndikator = $dataIndikator->count();
        // if ($countDataIndikator > 0) {
        //     $dataIndikator->delete();
        //     $indikator->delete();
        //     return back()->with('success','Indikator dan Data Indikator berhasil dihapus!');
        // }
        // else {
        //     $indikator->delete();
        //     return back()->with('success','Indikator berhasil dihapus!');
        // }
        $indikator->delete();
        return back()->with('success','Indikator berhasil dihapus!');
    }
}
