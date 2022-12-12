<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;

class ExploreController extends Controller
{
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

    // public function get_latest(): JsonResponse
    // {
    //     $latest = Book::wh
    // }
}
