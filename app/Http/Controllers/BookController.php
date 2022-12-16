<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use App\Models\Review;
use App\Models\WishList;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use willvincent\Rateable\Rating;

class BookController extends Controller
{
    /**
     * get all books in DB
     *
     * @return JsonResponse
     */
    public function get_all_books(): JsonResponse
    {
        $books = Book::with('author')->with('category')->with('reviews')->get();
        foreach ($books as $book) {
            $book->avgRating = (double) $book->averageRating() ?? 0.00;
        }
        return response()->json([
            'error' => false,
            'data' => $books
        ]);
    }

    /**
     * get best selling books
     *
     * @return JsonResponse
     */
    public function get_top_rated(): JsonResponse
    {
        $books = Book::with('author')->with('category')->with('reviews')->where('is_top_rated', '=', 1)->get();

        return response()->json([
            'error' => false,
            'data' => $books
        ]);
    }

    /**
     * get featured book
     *
     * @return JsonResponse
     */
    public function get_featured(): JsonResponse
    {
        $featured = Book::with('author')->with('category')->with('reviews')->where('is_featured', '=', 1)->first();

        return response()->json([
            'error' => false,
            'data' => $featured
        ]);
    }

    /**
     * get latest books
     *
     * @return JsonResponse
     */
    public function get_latest(): JsonResponse
    {
        $latest = Book::with('author')->with('category')->with('reviews')->orderBy('created_at', 'desc')->get();

        return response()->json([
            'error' => false,
            'data' => $latest
        ]);
    }
    /**
     * get all authors
     *
     * @return JsonResponse
     */
    public function get_book_authors(): JsonResponse
    {
        $authors = Author::all();

        return response()->json([
            'error' => false,
            'data' => $authors
        ]);
    }
    /**
     * add book to wishlist
     *
     * @param Request $request
     * @return void
     */
    public function add_to_wishlist(Request $request)
    {
        $user_id = Auth::id();
        $book_id = $request->book_id;

        $exists = WishList::where('user_id', $user_id)->where('book_id', $book_id)->first();
        if (!$exists) {
            WishList::create([
                'user_id' => $user_id,
                'book_id' => $book_id,
            ]);
        }
        return response()->json([
            'error' => false
        ]);
    }
    /**
     * get logged in user wishlist
     *
     * @return void
     */
    public function get_wishlist()
    {
        $user_id = Auth::id();
        $wishlist = WishList::with('user')->with('book')->where('user_id', $user_id)->get();

        return response()->json([
            'error' => false,
            'data' => $wishlist
        ]);
    }
    /**
     * remove item from wishlist
     *
     * @param integer $id
     * @return JsonResponse
     */
    public function remove_from_wishlist(int $id): JsonResponse
    {
        $wishlist_item = WishList::find($id);
        if ($wishlist_item) {
            $wishlist_item->delete();
        }
        return response()->json([
            'error' => false
        ]);
    }
    /**
     * add review to book
     *
     * @param Request $request
     * @param integer $id
     * @return JsonResponse
     */
    public function review_book(Request $request, int $id): JsonResponse
    {
        try {
            $book_id = $id;
            $user_id = Auth::id();
            $rating = $request->rating;
            $comment = $request->comment;

            if (!$rating) {
                return response()->json([
                    'error' => true,
                    'msg' => 'please select a rating value'
                ]);
            }

            $book = Book::find($book_id);
            if (!$book) {
                return response()->json([
                    'error' => true,
                    'msg' => 'book not found'
                ]);
            }
            $rating_entry = new Rating;
            $rating_entry->user_id = $user_id;
            $rating_entry->rating = $rating;

            $book->ratings()->save($rating_entry);
            Review::create([
                'user_id' => $user_id,
                'book_id' => $book_id,
                'rating' => $rating,
                'comment' => $comment
            ]);

            return response()->json([
                'error' => false
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => true,
                'msg' => $th->getMessage()
            ]);
        }
    }
}
