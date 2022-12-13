<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    /**
     * get all categories
     *
     * @return JsonResponse
     */
    public function get_all_categories(): JsonResponse
    {
        $categories = Category::all();

        return response()->json([
            'error' => false,
            'data' => $categories
        ]);
    }
}
