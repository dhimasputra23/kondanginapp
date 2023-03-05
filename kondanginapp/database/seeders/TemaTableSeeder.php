<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('temas')->insert([
            'nama' => 'bronzeSatu',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'bronzeDua',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'bronzeTiga',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'silverSatu',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'silverDua',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'silverTiga',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'goldSatu',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'goldDua',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('temas')->insert([
            'nama' => 'goldTiga',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        //
    }
}
