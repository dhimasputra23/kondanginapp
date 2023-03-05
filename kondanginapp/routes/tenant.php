<?php

declare(strict_types=1);

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use App\Http\Controllers\TenantController;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function ($router) {
    Route::get('to/{nama_tamu}', function ($nama_tamu) {
        if (tenant('tema_id')==1) {
            return view('bronze');
        }
        // else if(tenant('tema_id')==2){
        //     return view('bronzeDua');
        // }else if(tenant('tema_id')==3){
        //     return view('bronzeTiga');
        // }
        else if(tenant('tema_id')==4){
            return view('silverSatu');
        }
        // else if(tenant('tema_id')==5){
        //     return view('silverDua');
        // }else if(tenant('tema_id')==6){
        //     return view('silverTiga');
        // }else if(tenant('tema_id')==7){
        //     return view('goldSatu');
        // }else if(tenant('tema_id')==8){
        //     return view('goldDua');
        // }
        else if(tenant('tema_id')==9){
            return view('goldTiga');
        }
        // return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id').'with tema id : '.tenant('tema_id');
        // return view('goldTiga');
    });
});

// Route::get('/', function () {
//     dd(Tamu::all());
//     return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
// });

Route::middleware([
    'api',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function ($router) {
    Route::get('api/to/{nama_tamu}', function ($nama_tamu) {
        $controller = new TenantController();
        return $controller->show(tenant(), $nama_tamu);
    });
    Route::post('api/submit_ucapan', function (Request $request) {
        $controller = new TenantController();
        return $controller->submitUcapan(tenant(), $request);
    });
});

