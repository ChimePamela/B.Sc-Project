<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Book::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'author_id' => $this->faker->numberBetween(1, 10),
            'isbn' => $this->faker->text(10),
            'title' => $this->faker->sentence(4),
            'image_url' => $this->faker->imageUrl(800, 1130, 'book', true),
            'category_id' => $this->faker->numberBetween(1, 10),
            'description' => $this->faker->realText(),
            'published_date' => $this->faker->dateTime(),
            'for_sale' => $this->faker->boolean(),
            'price' => $this->faker->numberBetween(0, 90000)
        ];
    }
}
