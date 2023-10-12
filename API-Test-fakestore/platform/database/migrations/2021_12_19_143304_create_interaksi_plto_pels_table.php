<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInteraksiPltoPelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interaksi_plto_pels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('platform_id');
            $table->foreignId('pelanggan_id');
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
        Schema::dropIfExists('interaksi_plto_pels');
    }
}
