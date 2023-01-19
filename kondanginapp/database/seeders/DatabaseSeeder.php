<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // $users = User::factory(2)->create();
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(TemaTableSeeder::class);
        $this->call(PaketTableSeeder::class);
        $this->call(Paket_TemaTableSeeder::class);
        $this->call(UndangansTableSeeder::class);
        $this->call(ProfilPasangansTableSeeder::class);
        $this->call(AlamatGiftsTableSeeder::class);
        $this->call(RekeningGiftsTableSeeder::class);
        $this->call(SubAcarasTableSeeder::class);
        $this->call(MusiksTableSeeder::class);
        $this->call(TamusTableSeeder::class);
        $this->call(QuotesTableSeeder::class);
        $this->call(UcapansTableSeeder::class);
        $this->call(FotosTableSeeder::class);
        $this->call(VideosTableSeeder::class);
    }
}
