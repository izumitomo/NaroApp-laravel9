<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('borders', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('genre');
            $table->boolean('tensei_or_tenni');
            $table->integer('global_point');
            $table->integer('favorite_count');
            $table->integer('reviewer_count');
            $table->float('average_rate', 4, 2)->nullable(true);
            $table->integer('comment_count');
            $table->float('length_per_point', 7, 3);
            $table->integer("max_global_point");
            $table->integer("max_favorite_count");
            $table->integer("max_reviewer_count");
            $table->float("max_average_rate", 4, 2)->nullable(true);
            $table->integer("max_comment_count");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('borders');
    }
};
