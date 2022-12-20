<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use App\Models\Review;
use App\Models\WishList;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
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
        $featured->avgRating = (double) $featured->averageRating() ?? 0.00;

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
     * add a new author
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function add_author(Request $request): JsonResponse
    {
        Author::create($request->all());
        return response()->json([ 'error' => false ]);
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
     * delete book
     *
     * @param integer $id
     * @return JsonResponse
     */
    public function delete_book(int $id): JsonResponse
    {
        $is_admin = Auth::user()->is_admin;
        if (!$is_admin) {
            return response()->json([
                'error' => true,
                'msg' => 'You are not allowed to perform this action'
            ], 401);
        }

        $book = Book::find($id);
        if (!$book) {
            return response()->json([
                'error' => true,
                'msg' => 'book not found'
            ]);
        }
        $book->delete();

        return response()->json([ 'error' => false ]);
    }
    /**
     * update a single book
     *
     * @param integer $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update_book(int $id, Request $request): JsonResponse
    {
        $is_admin = Auth::user()->is_admin;
        if (!$is_admin) {
            return response()->json([
                'error' => true,
                'msg' => 'You are not allowed to perform this action'
            ], 401);
        }

        $book = Book::find($id);
        if (!$book) {
            return response()->json([
                'error' => true,
                'msg' => 'book not found'
            ]);
        }

        $book->title = $request->title ?? $book->title;
        $book->image_url = $request->image_url ?? $book->image_url;
        $book->description = $request->description ?? $book->description;
        $book->is_top_rated = $request->is_top_rated ?? $book->is_top_rated;

        if ($request->is_featured && !$book->is_featured) {
            Book::where('is_featured', 1)->update(['is_featured' => 0]);
        }

        $book->is_featured = $request->is_featured ?? $book->is_featured;
        $book->save();

        return response()->json([ 'error' => false ]);
    }
    /**
     * add a new book
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function add_book(Request $request): JsonResponse
    {
        $is_admin = Auth::user()->is_admin;
        if (!$is_admin) {
            return response()->json([
                'error' => true,
                'msg' => 'You are not allowed to perform this action'
            ], 401);
        }
        $payload = (object) $request->all();
        $payload->published_date = date('Y-m-d H:i:s');

        Book::create((array) $payload);

        return response()->json([ 'error' => false ]);
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
