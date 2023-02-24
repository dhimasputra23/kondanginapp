<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotoBackground extends Model
{
    use HasFactory;
    protected $fillable = [
        'url',
        'flag'
    ];
    protected $hidden = ["created_at", "updated_at"];
}
