<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use willvincent\Rateable\Rateable;

class Book extends Model
{
    // use HasFactory, Rateable;
    use HasFactory, Rateable;

    protected $fillable = [
        'author_id',
        'isbn',
        'title',
        'image_url',
        'description',
        'category_id',
        'published_date',
        'for_sale',
        'is_featured',
        'is_top_rated',
        'price',
    ];

    /**
     * Get the author associated with the Book
     *
     * @return HasOne
     */
    public function author(): HasOne
    {
        return $this->hasOne(Author::class, 'id', 'author_id');
    }

    /**
     * Get all of the reviews for the Book
     *
     * @return HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'book_id', 'id');
    }
    /**
     * get category for book
     *
     * @return void
     */
    public function category() {
        return $this->belongsTo(Category::class);
    }
}
