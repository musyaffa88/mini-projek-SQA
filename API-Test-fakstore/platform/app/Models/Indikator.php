<?php

namespace App\Models;

use App\Models\Platform;
use App\Models\DataIndikator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Indikator extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function platform(){
        return $this->belongsTo(Platform::class);
    }

    public function dataindikator(){
        return $this->hasMany(DataIndikator::class);
    }
}
