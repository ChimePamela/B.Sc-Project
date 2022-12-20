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
        // seed users
        \App\Models\User::factory(3)->create();
        \App\Models\User::factory()->state([ 'email' => 'admin@readit.com', 'is_admin' => 1 ])->create();


        // seed categories
        $categories = ['Science', 'Novels', 'Languages', 'Health Books'];
        foreach ($categories as $name) {
            \App\Models\Category::factory()->state([
                'name' => $name
                ])->create();
            }

        // seed authors
        $authors = array(
            [ 'name' => 'Charles Darwin', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Siddhartha Mukherjee', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Stephen Hawking', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Richard Feynman', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'J. M. Coetzee', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Michael Shaara', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Maurice Druon', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Steven Pinker', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Melvyn Bragg', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Barbara Bregstein', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'R. A. Hope', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Kathleen J. W. Wilson', 'photo_url' => 'www.google.com' ],
            [ 'name' => 'Richard Feynman', 'photo_url' => 'www.google.com' ],
        );
        foreach ($authors as $author) {
            \App\Models\Author::factory()->state($author)->create();
        }

        // seed books
        $books = array(
            [
                'title' => 'On The Origin of Species',
                'image_url' => '/images/books/71UtlN4QfUL.jpg',
                'description' => 'On the Origin of Species published on 24 November 1859, is a work of scientific literature by Charles Darwin that is considered to be the foundation of evolutionary biology.',
                'category_id' => 1,
                'author_id' => 1,
                'is_featured' => 1,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Emperor of All Maladies',
                'image_url' => '/images/books/91j7oB8o-rL.jpg',
                'description' => 'A Biography of Cancer is a book written by Siddhartha Mukherjee, an Indian-born American physician and oncologist.',
                'category_id' => 1,
                'author_id' => 2,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'A Brief History of Time',
                'image_url' => '/images/books/81pQPZAFWbL.jpg',
                'description' => 'From the Big Bang to Black Holes is a book on theoretical cosmology by English physicist Stephen Hawking. ',
                'category_id' => 1,
                'author_id' => 3,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Strange Theory of Light and Matter',
                'image_url' => '/images/books/710QcSt8pfL.jpg',
                'description' => 'The Strange Theory of Light and Matter is an adaptation for the general reader of four lectures on quantum electrodynamics published in 1985',
                'category_id' => 1,
                'author_id' => 4,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Master of Petersburg',
                'image_url' => '/images/books/the-master-of-petersburg-2.jpg',
                'description' => 'The novel is a work of fiction but features the Russian writer Fyodor Dostoyevsky as its protagonist',
                'category_id' => 2,
                'author_id' => 5,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Killer Angels: A Novel of the Civil War',
                'image_url' => '/images/books/91JFcEqeRL.jpg',
                'description' => 'The Killer Angels is a 1974 historical novel by Michael Shaara that was awarded the Pulitzer Prize for Fiction in 1975.',
                'category_id' => 2,
                'author_id' => 6,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Iron King',
                'image_url' => '/images/books/o37360.webp',
                'description' => '“The Iron King” by Maurice Druon follows the intrigues, passions, murders, and backstabbing within the French dynasty in the 1300s.',
                'category_id' => 2,
                'author_id' => 7,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Language Instinct',
                'image_url' => '/images/books/61XZ9-5djyL.jpg',
                'description' => 'From the Publisher: In this classic, the world\'s expert on language and mind lucidly explains everything you always wanted to know about language',
                'category_id' => 3,
                'author_id' => 8,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Adventure of English',
                'image_url' => '/images/books/english.jpg',
                'description' => 'The Adventure of English is a British television series on the history of the English language presented by Melvyn Bragg',
                'category_id' => 3,
                'author_id' => 9,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'Easy Spanish Step-By-Step',
                'image_url' => '/images/books/041584.jpg',
                'description' => 'A proven grammar based approach that gets you communicating in Spanish with confidence, right awayEasy Spanish Step by Step proves that a solid grounding',
                'category_id' => 3,
                'author_id' => 10,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'Oxford Handbook of Clinical Medicine',
                'image_url' => '/images/books/61E-7FeUH1L.jpg',
                'description' => 'The Oxford Handbook of Clinical Medicine is a pocket textbook aimed at medical students and junior doctors, and covers all aspects of clinical medicine',
                'category_id' => 4,
                'author_id' => 11,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'Ross & Wilson Anatomy and Physiology in Health and Illness',
                'image_url' => '/images/books/MCQ-for-ross-and-wilson-anatomy-and-physiology-in-health-and-illnesss.jpg',
                'description' => 'Here\'s an easy-to-read and easy-to-understand basic textbook of anatomy and physiology.',
                'category_id' => 4,
                'author_id' => 12,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
            [
                'title' => 'The Gale Encyclopedia of Medicine',
                'image_url' => '/images/books/51CJRSQto3L._AC_SY780_.jpg',
                'description' => 'Feynman was one of the most creative and influential physicists of the twentieth century. A veteran of the Manhattan Project of World War II and a 1965',
                'category_id' => 4,
                'author_id' => 13,
                'is_featured' => 0,
                'is_top_rated' => 1
            ],
        );

        foreach ($books as $book) {
            \App\Models\Book::factory()->state($book)->create();
        }
    }
}
