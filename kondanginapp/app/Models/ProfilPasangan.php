<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfilPasangan extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'kelamin'
    ];
    protected $hidden = ["created_at", "updated_at","undangan_id"];

    // public function undangan()
    // {
    //     return $this->belongsTo(Undangan::class,'undangan_id','id');
    // }


}
