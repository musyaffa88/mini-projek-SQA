<?php

namespace App\Http\Controllers;

use App\Models\Fasilitator;
use Illuminate\Http\Request;
use App\Models\User;

class DaftarController extends Controller
{
    public function viewDaftarKlien(){
        return view('klien.daftarklien',[
            'title' => 'Daftar Sebagai Klien'
        ]);
    }

    public function viewDaftarFasilitator(){
        return view('fasilitator.daftarfasilitator',[
            'title' => 'Daftar Sebagai Fasilitator'
        ]);
    }

    public function StoreDaftarKlien(Request $request){
       $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email'=>'required|email:dns|unique:users',
            'password'=>'required|min:6|max:255',
            'username' =>'required|min:8|max:255|unique:users'
       ]);
       $validatedData['password'] = bcrypt($validatedData['password']);
       User::create($validatedData);
    
       return redirect('/masukklien')->with('berhasil', 'Daftar Berhasil! Silahkah Masuk!');

    }

    public function StoreDaftarFasilitator(Request $request){
        $validatedData = $request->validate([
             'name' => 'required|max:255',
             'email'=>'required|email:dns|unique:fasilitators',
             'password'=>'required|min:6|max:255',
             'username' =>'required|min:8|max:255|unique:fasilitators'
        ]);
        $validatedData['password'] = bcrypt($validatedData['password']);
        Fasilitator::create($validatedData);
     
        return redirect('/masukfasilitator')->with('berhasil', 'Daftar Berhasil! Silahkah Masuk!');
 
     }
}