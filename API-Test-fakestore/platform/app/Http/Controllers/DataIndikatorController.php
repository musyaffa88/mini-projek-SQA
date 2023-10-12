<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Models\DataIndikator;
use App\Models\Indikator;
use App\Http\Requests\StoreDataIndikatorRequest;
use App\Http\Requests\UpdateDataIndikatorRequest;
use App\Models\Platform;

class DataIndikatorController extends Controller
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
     * @param  \App\Http\Requests\StoreDataIndikatorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDataIndikatorRequest $request)
    {
        $this->validate($request,[
            'data'=>'required',
            'date'=>'required'
        ]);
        DataIndikator::create([
            'data'=> $request->data,
            'date'=> $request->date,
            'indikator_id'=> $request->indikator_id
        ]);
        return back()->with('success','Data Indikator berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataIndikator  $dataIndikator
     * @return \Illuminate\Http\Response
     */
    public function show(DataIndikator $dataIndikator, $id)
    {
        
        $indikator = Indikator::find($id);
        // $platform = Platform::where('id',$indikator->platform_id)->get();
        $dataIndikator = DataIndikator::where('indikator_id',$id)->get();
        $sumDataBulan = DB::table('data_indikators')
        ->select([
            DB::raw('sum(data) as jumlah'),
            DB::raw('EXTRACT(MONTH from date) as bulan')
        ])->groupBy('bulan')->where('indikator_id',$id)->get();
        $sumDataTahun = DB::table('data_indikators')
        ->select([
            DB::raw('sum(data) as jumlah'),
            DB::raw('EXTRACT(YEAR from date) as tahun')
        ])->groupBy('tahun')->where('indikator_id',$id)->get();
        // dd($countData);
        return view('klien.dataindikatorklien',[
            'title'=>'Data Indikator',
            'indikator' =>$indikator,
            // 'platform'=> $platform,
            'dataIndikator'=>$dataIndikator,
            'sumDataBulan'=>$sumDataBulan,
            'sumDataTahun'=>$sumDataTahun
        ]);
    }

    public function showDashboard(DataIndikator $dataIndikator, $id)
    {
        
        $indikator = Indikator::find($id);
        // $platform = Platform::where('id',$indikator->platform_id)->get();
        $dataIndikator = DataIndikator::where('indikator_id',$id)->get();
        $sumDataBulan = DB::table('data_indikators')
        ->select([
            DB::raw('sum(data) as jumlah'),
            DB::raw('EXTRACT(MONTH from date) as bulan'),
        ])->groupBy('bulan')->where('indikator_id',$id)->get();
        $sumDataTahun = DB::table('data_indikators')
        ->select([
            DB::raw('sum(data) as jumlah'),
            DB::raw('EXTRACT(YEAR from date) as tahun')
        ])->groupBy('tahun')->where('indikator_id',$id)->get();
        $bulan = [];
        $jumlahDataBulan = [];
        $tahun = [];
        $jumlahDataTahun = [];
        foreach($sumDataBulan as $sDB){
            $bulan[]= $sDB -> bulan;
            $jumlahDataBulan[]= $sDB -> jumlah;
        }
        foreach($sumDataTahun as $sDT){
            $tahun[]= $sDT -> tahun;
            $jumlahDataTahun[]= $sDT -> jumlah;
        }
        // dd(json_encode($jumlahDataBulan));
        return view('klien.showdashboardklien',[
            'title'=>'Dashboard Data Indikator',
            'indikator' =>$indikator,
            // 'platform'=> $platform,
            'dataIndikator'=>$dataIndikator,
            'sumDataBulan'=>$sumDataBulan,
            'sumDataTahun'=>$sumDataTahun,
            'bulan'=>$bulan,
            'tahun'=>$tahun,
            'jumlahDataBulan'=>$jumlahDataBulan,
            'jumlahDataTahun'=>$jumlahDataTahun
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataIndikator  $dataIndikator
     * @return \Illuminate\Http\Response
     */
    public function edit(DataIndikator $dataIndikator)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDataIndikatorRequest  $request
     * @param  \App\Models\DataIndikator  $dataIndikator
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDataIndikatorRequest $request, DataIndikator $dataIndikator, $id)
    {
        $this->validate($request,[
            'data'=>'required',
            'date'=>'required'
        ]);

       $dataIndikator = DataIndikator::find($id);
       $dataIndikator->data = $request->data;
       $dataIndikator->date = $request->date;
       $dataIndikator->indikator_id = $request->indikator_id;
       $dataIndikator->save();
       return back()->with('success','Data Indikator berhasil diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataIndikator  $dataIndikator
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataIndikator $dataIndikator, $id)
    {
        $dataIndikator = DataIndikator::find($id);
        $dataIndikator->delete();
        return back()->with('success','Data Indikator berhasil dihapus!');
    }
}
