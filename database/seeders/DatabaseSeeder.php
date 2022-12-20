<?php

namespace Database\Seeders;

use App\Models\Book;
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
        \App\Models\User::factory(3)->create();
        \App\Models\Author::factory(10)->create();

        // seed categories
        $categories = ['Science', 'Languages', 'Health Books', 'Novels'];
        foreach ($categories as $name) {
            \App\Models\Category::factory()->state([
                'name' => $name
                ])->create();
            }

        // seed authors

        // seed books
        \App\Models\Book::factory(20)->create();
        $books = array(
            [
                'title' => '',
                'image_url' => '',
                'description' => '',
                'category_id' => 1,
                'author_id' => 1,
                'is_featured' => 0,
                'is_top_rated' => 1
            ]
        );

        foreach ($books as $book) {
            \App\Models\Book::factory()->state($book)->create();
        }
    }
}
