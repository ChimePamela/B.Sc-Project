<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;

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
}
