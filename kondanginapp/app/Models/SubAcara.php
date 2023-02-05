<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubAcara extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama',
        'start_time',
        'end_time',
        'tempat',
        'alamat',
        'lattitude',
        'longitude',
        'main_event',
    ];
    protected $hidden = ["created_at", "updated_at","undangan_id"];
    
    // public function undangan()
    // {
    //     return $this->belongsTo(Undangan::class,'undangan_id','id');
    // }
}
