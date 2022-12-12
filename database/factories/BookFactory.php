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
        $title = $this->faker->sentence(4);
        return [
            'author_id' => $this->faker->numberBetween(1, 10),
            'isbn' => $this->faker->text(10),
            'title' => $title,
            'image_url' => $this->faker->imageUrl(800, 1130, 'book', true, $title),
            'category_id' => $this->faker->numberBetween(1, 10),
            'description' => $this->faker->realText(),
            'is_top_rated' => $this->faker->numberBetween(0, 2),
            'published_date' => $this->faker->dateTime(),
            'for_sale' => $this->faker->boolean(),
            'price' => $this->faker->numberBetween(0, 90000)
        ];
    }
}
