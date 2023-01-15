<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Musik extends Model
{
    use HasFactory;
    protected $fillable = [
        'url',
        'nama'
    ];
    protected $hidden = ["created_at", "updated_at","undangan_id"];

    public function undangan()
    {
        return $this->belongsTo(Undangan::class,'undangan_id','id');
    }
}
