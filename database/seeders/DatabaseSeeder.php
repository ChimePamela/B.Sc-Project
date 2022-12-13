<?php

namespace Database\Seeders;

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
        \App\Models\Book::factory(20)->create();
        \App\Models\Author::factory(10)->create();

        // seed categories
        $categories = ['Science', 'Languages', 'Health Books', 'Novels'];
        foreach ($categories as $name) {
            \App\Models\Category::factory()->state([
                'name' => $name
            ])->create();
        }
    }
}
