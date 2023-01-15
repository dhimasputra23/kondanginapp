<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UndangansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('undangans')->insert([
            'kode_undangan' => 'nandaaisyah',
            'created_at' => now(),
            'updated_at' => now(),
            'user_id' => 3,
            'paket_id' => 1,
            'tema_id' => 1
        ]);
        //
    }
}
