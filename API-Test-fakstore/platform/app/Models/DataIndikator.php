<?php

namespace App\Models;

use App\Models\Indikator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DataIndikator extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function indikator(){
        return $this->belongsTo(Indikator::class);
    }
}
