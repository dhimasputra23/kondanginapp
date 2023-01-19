<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubAcarasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_acaras', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->datetime('start_time');
            $table->datetime('end_time');
            $table->string('tempat');
            $table->double('lattitude');
            $table->double('longitude');
            $table->boolean('main_event');
            $table->timestamps();

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
        Schema::dropIfExists('sub_acaras');
    }
}
