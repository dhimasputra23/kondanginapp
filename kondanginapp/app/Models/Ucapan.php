<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ucapan extends Model
{
    use HasFactory;
    protected $fillable = [
        'nama',
        'kalimat',
        'konfirmasi'
    ];
    protected $hidden = ["created_at", "updated_at","undangan_id"];

    public function undangan()
    {
        return $this->belongsTo(Undangan::class,'undangan_id','id');
    }
    public function tamu()
    {
        return $this->belongsTo(Tamu::class,'tamu_id','id');
    }

}
