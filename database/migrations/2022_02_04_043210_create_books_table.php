<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->integer('author_id')->nullable();
            $table->string('isbn')->nullable();
            $table->string('title');
            $table->string('image_url');
            $table->integer('category_id')->nullable();
            $table->text('description')->nullable();
            $table->date('published_date');
            $table->boolean('for_sale')->default(1);
            $table->boolean('is_featured')->default(0);
            $table->boolean('is_top_rated')->default(0);
            $table->double('price')->default(0.0);
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
        Schema::dropIfExists('books');
    }
}
