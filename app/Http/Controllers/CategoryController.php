<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
    /**
     * create a new category
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function create_category(Request $request): JsonResponse
    {
        Category::create($request->all());
        return response()->json([
            'error' => false,
        ]);
    }
}
