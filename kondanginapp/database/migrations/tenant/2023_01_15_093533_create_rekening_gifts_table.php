<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRekeningGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rekening_gifts', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('bank');
            $table->string('no_rekening');
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
        Schema::dropIfExists('rekening_gifts');
    }
}
