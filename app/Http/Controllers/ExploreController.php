<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExploreController extends Controller
{
    /**
     * get best selling books
     *
     * @return JsonResponse
     */
    public function get_best_selling(): JsonResponse
    {
        $books = Book::with('author')->with('reviews')->where('is_best_selling', '=', 1)->get();

        return response()->json([
            'error' => false,
            'data' => $books
        ]);
    }
}
