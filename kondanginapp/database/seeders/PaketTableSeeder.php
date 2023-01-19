<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaketTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pakets')->insert([
            'nama' => 'paket promo opening',
            'harga' => 120000,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        //
    }
}
