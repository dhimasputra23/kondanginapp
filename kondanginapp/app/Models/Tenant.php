<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase as TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;

    public static function getCustomColumns(): array
{
    return [
        'id',
        'tema_id',
        'paket_id',
        'user_id'
    ];
}

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function paket()
    {
        return $this->belongsTo(Paket::class,'paket_id','id');
    }

    public function tema()
    {
        return $this->belongsTo(Tema::class,'tema_id','id');
    }

    public function scopeWithWhereHas($query, $relation, $constraint){
        return $query->whereHas($relation, $constraint)
        ->with([$relation => $constraint]);
       }
}