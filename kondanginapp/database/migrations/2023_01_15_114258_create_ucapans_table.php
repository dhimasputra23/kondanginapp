<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUcapansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ucapans', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->longText('kalimat');
            $table->enum('konfirmasi', ['Hadir', 'Belum Pasti', 'Tidak Hadir']);
            $table->timestamps();

            $table->unsignedBigInteger('tamu_id');
            $table->foreign('tamu_id')->references('id')->on('tamus');
            $table->unsignedBigInteger('undangan_id');
            $table->foreign('undangan_id')->references('id')->on('undangans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ucapans');
    }
}
