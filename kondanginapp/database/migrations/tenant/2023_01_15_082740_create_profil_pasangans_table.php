<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilPasangansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profil_pasangans', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nama_panggilan');
            $table->string('nama_bapak');
            $table->string('nama_ibu');
            $table->string('url_foto');
            $table->enum('kelamin', ['Pria', 'Wanita']);
            $table->timestamps();

            // $table->unsignedBigInteger('undangan_id');
            // $table->foreign('undangan_id')->references('id')->on('undangans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profil_pasangans');
    }
}
