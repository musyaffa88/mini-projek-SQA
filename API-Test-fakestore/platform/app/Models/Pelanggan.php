<?php

namespace App\Models;

use App\Models\Platform;
use App\Models\InteraksiPeltoPl;
use App\Models\InteraksiPltoPel;
use App\Models\InteraksiPeltoPel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pelanggan extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function platform(){
        return $this->belongsTo(Platform::class);
    }

    public function interaksiPltoPel(){
        return $this->hasMany(InteraksiPltoPel::class);
    }

    public function interaksiPeltoPl(){
        return $this->hasMany(InteraksiPeltoPl::class);
    }

    public function interaksiPeltoPel(){
        return $this->hasMany(InteraksiPeltoPel::class);
    }
}
