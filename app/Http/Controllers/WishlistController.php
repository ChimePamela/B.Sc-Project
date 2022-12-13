<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function list(): JsonResponse
    {
        $user_id = Auth::id();
        $wishlist = WishList::with('user')->with('book')->where('user_id', $user_id)->get();

        return response()->json([
            'error' => false,
            'data' => $wishlist
        ]);
    }

    /**
     * add item to wishlist.
     *
     * @return \Illuminate\Http\Response
     */
    public function add()
    {
        //
    }

    /**
     * Remove item from wishlist
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function remove($id)
    {
        //
    }
}
