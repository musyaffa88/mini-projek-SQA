<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MasukController;
use App\Http\Controllers\DaftarController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\PlatformController;
use App\Http\Controllers\IndikatorController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\InteraksiPeltoPlController;
use App\Http\Controllers\InteraksiPltoPelController;
use App\Http\Controllers\InteraksiPeltoPelController;
use App\Http\Controllers\DataIndikatorController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});

// Klien
Route::get('/masukklien', [MasukController::class, 'viewMasukKlien'])->name('login')->middleware('guest');
Route::post('/masukklien', [MasukController::class, 'masukKlien']);
Route::post('/keluarklien', [MasukController::class, 'keluarKlien']);
Route::get('/daftarklien', [DaftarController::class, 'viewDaftarKlien'])->name('login')->middleware('guest');
Route::post('/daftarklien', [DaftarController::class, 'StoreDaftarKlien']);

Route::get('/berandaklien', [PlatformController::class, 'index'])->middleware('auth');
Route::get('/strategiklien/{id}',[PlatformController::class,'show'])->middleware('auth');
Route::post('/tambahplatform',[PlatformController::class,'store'])->middleware('auth');
Route::delete('/hapusplatform/{id}',[PlatformController::class,'destroy'])->middleware('auth');
Route::put('/editplatform/{id}',[PlatformController::class,'update'])->middleware('auth');

Route::post('/tambahpelanggan/{nama}',[PelangganController::class,'store'])->middleware('auth');
Route::delete('/hapuspelanggan/{id}',[PelangganController::class,'destroy'])->middleware('auth');
Route::put('/editpelanggan/{id}',[PelangganController::class,'update'])->middleware('auth');

Route::post('/tambahinteraksiPltoPel/{nama}',[InteraksiPltoPelController::class,'store'])->middleware('auth');
Route::delete('/hapusinteraksiPltoPel/{id}',[InteraksiPltoPelController::class,'destroy'])->middleware('auth');
Route::put('/editinteraksiPltoPel/{id}',[InteraksiPltoPelController::class,'update'])->middleware('auth');

Route::post('/tambahinteraksiPeltoPl/{nama}',[InteraksiPeltoPlController::class,'store'])->middleware('auth');
Route::delete('/hapusinteraksiPeltoPl/{id}',[InteraksiPeltoPlController::class,'destroy'])->middleware('auth');
Route::put('/editinteraksiPeltoPl/{id}',[InteraksiPeltoPlController::class,'update'])->middleware('auth');

Route::post('/tambahinteraksiPeltoPel/{nama}',[InteraksiPeltoPelController::class,'store'])->middleware('auth');
Route::delete('/hapusinteraksiPeltoPel/{id}',[InteraksiPeltoPelController::class,'destroy'])->middleware('auth');
Route::put('/editinteraksiPeltoPel/{id}',[InteraksiPeltoPelController::class,'update'])->middleware('auth');

Route::get('/indikatorklien/{id}',[IndikatorController::class,'show'])->middleware('auth');
Route::post('/tambahindikator',[IndikatorController::class,'store'])->middleware('auth');
Route::delete('/hapusindikator/{id}',[IndikatorController::class,'destroy'])->middleware('auth');
Route::put('/editindikator/{id}',[IndikatorController::class,'update'])->middleware('auth');

Route::get('/dataindikatorklien/{id}',[DataIndikatorController::class,'show'])->middleware('auth');
Route::post('/tambahdataindikator',[DataIndikatorController::class,'store'])->middleware('auth');
Route::delete('/hapusdataindikator/{id}',[DataIndikatorController::class,'destroy'])->middleware('auth');
Route::put('/editdataindikator/{id}',[DataIndikatorController::class,'update'])->middleware('auth');

Route::get('/dashboardklien/{id}',[IndikatorController::class,'showIndikator'])->middleware('auth');
Route::get('/dashboarddataindikatorklien/{id}',[DataIndikatorController::class,'showDashboard'])->middleware('auth');
// Fasilitator
Route::get('/masukfasilitator', [MasukController::class, 'viewMasukFasilitator'])->name('login')->middleware('guest');
Route::post('/masukfasilitator', [MasukController::class, 'masukFasilitator']);
Route::get('/daftarfasilitator', [DaftarController::class, 'viewDaftarFasilitator'])->name('login')->middleware('guest');
Route::post('/daftarfasilitator', [DaftarController::class, 'StoreDaftarFasilitator']);

//Admin
