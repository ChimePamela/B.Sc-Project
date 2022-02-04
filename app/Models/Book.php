<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Nagy\LaravelRating\Traits\Rate\Rateable;

class Book extends Model
{
    use HasFactory, Rateable;

    protected $fillable = [
        'author_id',
        'isbn',
        'title',
        'description',
        'published_date',
        'for_sale',
        'price',
    ];

    /**
     * Get the author associated with the Book
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function author(): HasOne
    {
        return $this->hasOne(Author::class, 'id', 'author_id');
    }

    /**
     * Get all of the reviews for the Book
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'book_id', 'id');
    }
}
