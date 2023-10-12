<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInteraksiPeltoPelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interaksi_pelto_pels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('platform_id');
            $table->string('asal');
            $table->string('tujuan');
            // $table->foreignId('asalpelanggan_id')->references('id')->on('pelanggans');
            // $table->foreignId('tujuanpelanggan_id')->references('id')->on('pelanggans');
            $table->string('nilai');
            $table->string('moneter');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('interaksi_pelto_pels');
    }
}
