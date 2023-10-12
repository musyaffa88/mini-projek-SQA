<?php

namespace App\Models;

use App\Models\Platform;
use App\Models\Pelanggan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InteraksiPeltoPel extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function platform(){
        return $this->belongsTo(Platform::class);
    }

    public function pelanggan(){
        return $this->belongsTo(Pelanggan::class);
    }
}
