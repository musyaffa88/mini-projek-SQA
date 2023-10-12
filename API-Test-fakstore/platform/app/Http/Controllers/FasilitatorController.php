<?php

namespace App\Http\Controllers;

use App\Models\Fasilitator;
use Illuminate\Http\Request;

class FasilitatorController extends Controller
{
    public function index()
    {
        return view('klien.berandaklien',[
            'title' => 'Beranda',
            'fasilitator' => Fasilitator::all()
        ]);
    }
}
