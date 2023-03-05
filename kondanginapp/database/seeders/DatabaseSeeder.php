<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Tenant;
use App\Models\Tamu;
use App\Models\ProfilPasangan;
use App\Models\AlamatGift;
use App\Models\RekeningGift;
use App\Models\SubAcara;
use App\Models\Musik;
use App\Models\Quote;
use App\Models\Ucapan;
use App\Models\Foto;
use App\Models\FotoBackground;
use App\Models\Video;



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

        $tenant1 = Tenant::create([
            'id' => 'nandaaisyah',
            'tema_id' => 4,
            'paket_id' => 1,
            'user_id' => 3

        ]);

        $tenant2 = Tenant::create([
            'id' => 'rachmadaini',
            'tema_id' => 9,
            'paket_id' => 1,
            'user_id' => 2

        ]);

        $tenant1->domains()->create(['domain' => 'nandaaisyah.localhost']);
        $tenant2->domains()->create(['domain' => 'rachmadaini.localhost']);
        // //$this->call(TenantsTableSeeder::class);
        $tenant1->run(function () {
            ProfilPasangan::create([
                'nama' => 'Nanda',
                'nama_panggilan' => 'Nanda',
                'nama_bapak' => 'Bapaknya Nanda',
                'nama_ibu' => 'Ibunya Nanda',
                'kelamin' => 'Pria',
                'url_foto' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-2.png'
            ]);
            ProfilPasangan::create([
                'nama' => 'Aisyah',
                'nama_panggilan' => 'Aisyah',
                'nama_bapak' => 'Bapaknya Aisyah',
                'nama_ibu' => 'Ibunya Aisyah',
                'kelamin' => 'Wanita',
                'url_foto' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-1.png'
            ]);
            AlamatGift::create([
                'nama' => 'Nanda',
                'no_hp' => '085992893045',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'desa' => ' Pondok Jaya',
                'kecamatan' => 'Pondok Aren',
                'kota' => 'Tangerang Selatan',
                'provinsi' => 'Banten',
                'kode_pos' => '15224'
            ]);
            AlamatGift::create([
                'nama' => 'Aisyah',
                'no_hp' => '083683647812',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'desa' => ' Pondok Jaya',
                'kecamatan' => 'Pondok Aren',
                'kota' => 'Tangerang Selatan',
                'provinsi' => 'Banten',
                'kode_pos' => '15224'
            ]);
            RekeningGift::create([
                'nama' => 'Nanda',
                'bank' => 'BCA',
                'no_rekening' => '788239395719',
            ]);
            RekeningGift::create([
                'nama' => 'Aisyah',
                'bank' => 'CIMB',
                'no_rekening' => '321762374672',
            ]);
            SubAcara::create([
                'nama' => 'Akad Nikah',
                'start_time' => Carbon::create(2023, 8, 15, 8, 0, 0),
                'end_time' => Carbon::create(2023, 8, 15, 10, 0, 0),
                'tempat' => 'Masjid Al-Hikmah - Graha CIMB Niaga',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'lattitude' => -6.2733044,
                'longitude' => 106.7152007,
                'main_event' => true,
            ]);
            SubAcara::create([
                'nama' => 'Resepsi',
                'start_time' => Carbon::create(2023, 8, 15, 10, 0, 0),
                'end_time' => Carbon::create(2023, 8, 15, 16, 0, 0),
                'tempat' => 'Lobby - Griya CIMB Niaga',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'lattitude' => -6.2732298,
                'longitude' => 106.723991,
                'main_event' => false,
            ]);
            Musik::create([
                'url' => 'https://ia800109.us.archive.org/20/items/cd_little-voice_sara-bareilles/disc1/01.09.%20Sara%20Bareilles%20-%20City_sample.mp3',
                'nama' => 'T. Schürger - SoundHelix Song 1',
            ]);
            $tamus=array("Akri","Dhimas","Faishal","Sonya");
            foreach ($tamus as $key => $tamu) {
                Tamu::create([
                    'nama' => $tamu,
                ]);
                Ucapan::create([
                    'nama' => $tamu,
                    'kalimat' => "Selamat babang tamvan, semoga lancar sampai hari H, dan dijadikan keluarga yang samawa. Tetap metal!!! Huwatciyaaah!!!",
                    'konfirmasi' => 'Hadir',
                    'tamu_id' => $key+1
                ]);
            }
            Quote::create([
                'sumber' => "QS. Ar- Rum 21",
            'kalimat' => "Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram di samping-Nya dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah bagi kaum yang berfikir.",
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-10.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-13.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-14.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-15.jpg',
            ]);
            Video::create([
                'url' => 'https://www.youtube.com/embed/H2StEYDVlc8?feature=oembed',
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-11.jpg',
                'flag' => 'Background-1'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-5.jpg',
                'flag' => 'Background-2'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-14.jpg',
                'flag' => 'Background-3'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-7.jpg',
                'flag' => 'Background-4'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-13.jpg',
                'flag' => 'Background-5'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-4.jpg',
                'flag' => 'Background-6'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-8.jpg',
                'flag' => 'Background-7'
            ]);

            
            
        });
        $tenant2->run(function () {
            ProfilPasangan::create([
                'nama' => 'Rachmad Fadhilah',
                'nama_panggilan' => 'Rachmad',
                'nama_bapak' => 'Tuanku Imam Bonjol',
                'nama_ibu' => 'Ibuku Nyai Gandasari',
                'kelamin' => 'Pria',
                'url_foto' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-2.png'
            ]);
            ProfilPasangan::create([
                'nama' => 'Aini Nur Azizi',
                'nama_panggilan' => 'Aini',
                'nama_bapak' => 'Kiai Ageng Subroto',
                'nama_ibu' => 'Kartini Widiawati',
                'kelamin' => 'Wanita',
                'url_foto' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-1.png'
            ]);
            AlamatGift::create([
                'nama' => 'Rachmad',
                'no_hp' => '0928123129213',
                'alamat' => 'Kost Nur Hidayah',
                'desa' => ' Pondok Jaya',
                'kecamatan' => 'Pondok Aren',
                'kota' => 'Tangerang Selatan',
                'provinsi' => 'Banten',
                'kode_pos' => '15224'
            ]);
            AlamatGift::create([
                'nama' => 'Aini',
                'no_hp' => '083683647812',
                'alamat' => 'Kost nya Aini',
                'desa' => ' Pondok Jaya',
                'kecamatan' => 'Pondok Aren',
                'kota' => 'Tangerang Selatan',
                'provinsi' => 'Banten',
                'kode_pos' => '15224'
            ]);
            RekeningGift::create([
                'nama' => 'Rachmad',
                'bank' => 'BCA',
                'no_rekening' => '788239395719',
            ]);
            RekeningGift::create([
                'nama' => 'Aini',
                'bank' => 'CIMB',
                'no_rekening' => '321762374672',
            ]);
            SubAcara::create([
                'nama' => 'Akad Nikah',
                'start_time' => Carbon::create(2023, 8, 15, 8, 0, 0),
                'end_time' => Carbon::create(2023, 8, 15, 10, 0, 0),
                'tempat' => 'Masjid Al-Hikmah - Graha CIMB Niaga',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'lattitude' => -6.2733044,
                'longitude' => 106.7152007,
                'main_event' => true,
            ]);
            SubAcara::create([
                'nama' => 'Resepsi',
                'start_time' => Carbon::create(2023, 8, 15, 10, 0, 0),
                'end_time' => Carbon::create(2023, 8, 15, 16, 0, 0),
                'tempat' => 'Lobby - Griya CIMB Niaga',
                'alamat' => 'Jl. Wahid Hasyim No.3, Pd. Jaya, Kec. Pd. Aren, Kota Tangerang, Banten 15224, Indonesia',
                'lattitude' => -6.2732298,
                'longitude' => 106.723991,
                'main_event' => false,
            ]);
            Musik::create([
                'url' => 'https://ia800109.us.archive.org/20/items/cd_little-voice_sara-bareilles/disc1/01.09.%20Sara%20Bareilles%20-%20City_sample.mp3',
                'nama' => 'T. Schürger - SoundHelix Song 1',
            ]);
            $tamus=array("Akri","Dhimas","Faishal","Sonya");
            foreach ($tamus as $key => $tamu) {
                Tamu::create([
                    'nama' => $tamu,
                ]);
                Ucapan::create([
                    'nama' => $tamu,
                    'kalimat' => "Selamat babang tamvan, semoga lancar sampai hari H, dan dijadikan keluarga yang samawa. Tetap metal!!! Huwatciyaaah!!!",
                    'konfirmasi' => 'Hadir',
                    'tamu_id' => $key+1
                ]);
            }
            Quote::create([
                'sumber' => "QS. Ar- Rum 21",
            'kalimat' => "Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa tentram di samping-Nya dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah bagi kaum yang berfikir.",
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-10.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-13.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-14.jpg',
            ]);
            Foto::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-15.jpg',
            ]);
            Video::create([
                'url' => 'https://www.youtube.com/embed/H2StEYDVlc8?feature=oembed' ,
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-11.jpg',
                'flag' => 'Background-1'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-5.jpg',
                'flag' => 'Background-2'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-14.jpg',
                'flag' => 'Background-3'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-7.jpg',
                'flag' => 'Background-4'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-13.jpg',
                'flag' => 'Background-5'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-4.jpg',
                'flag' => 'Background-6'
            ]);
            FotoBackground::create([
                'url' => 'https://hi.ngantenstory.com/wp-content/uploads/2023/02/gold3-8.jpg',
                'flag' => 'Background-7'
            ]);

            
            
        });
        
        // $this->call(ProfilPasangansTableSeeder::class);
        // $this->call(AlamatGiftsTableSeeder::class);
        // $this->call(RekeningGiftsTableSeeder::class);
        // $this->call(SubAcarasTableSeeder::class);
        // $this->call(MusiksTableSeeder::class);
        // $this->call(TamusTableSeeder::class);
        // $this->call(QuotesTableSeeder::class);
        // $this->call(UcapansTableSeeder::class);
        // $this->call(FotosTableSeeder::class);
        // $this->call(VideosTableSeeder::class);
    }
}
