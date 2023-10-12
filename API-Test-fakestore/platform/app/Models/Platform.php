<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Platform extends Model
{
    use HasFactory; 
    // use Sluggable;

    protected $guarded = ['id'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function fasilitator(){
        return $this->belongsTo(Fasilitator::class);
    }

    public function pelanggan(){
        return $this->hasMany(Pelanggan::class);
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

    public function indikator(){
        return $this->hasMany(Indikator::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'nama'
            ]
        ];
    }
}
