<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class WishList extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'book_id'];
    /**
     * Get the user that owns the WishList
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the book associated with the WishList
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function book(): HasOne
    {
        return $this->hasOne(Book::class, 'id', 'book_id');
    }
}
