<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MasukController extends Controller
{
    public function viewMasukKlien(){
        return view('klien.masukklien',[
            'title' => 'Masuk Sebagai Klien'
        ]);
    }

    public function viewMasukFasilitator(){
        return view('fasilitator.masukfasilitator',[
            'title' => 'Masuk Sebagai Fasilitator'
        ]);
    }

    public function masukKlien(Request $request){
        $credentials = $request->validate([
            'email'=>'required|email:dns',
            'password'=>'required'
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/berandaklien');
        };

        return back()->with('GagalMasuk', 'Gagal Masuk!');
        
    }

    public function keluarKlien(Request $request){
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function masukFasilitator(Request $request){
        $credentials = $request->validate([
            'email'=>'required|email:dns',
            'password'=>'required'
        ]);

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/berandafasilitator');
        };

        return back()->with('GagalMasuk', 'Gagal Masuk!');
        
    }

    public function keluarFasilitator(Request $request){
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
