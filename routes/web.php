<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::prefix('app')->group(function () {
    Route::get('categories', [CategoryController::class, 'get_all_categories']);
    Route::get('all-books', [BookController::class, 'get_all_books']);
    Route::get('authors', [BookController::class, 'get_book_authors']);
    Route::get('top-rated', [BookController::class, 'get_top_rated']);
    Route::get('featured', [BookController::class, 'get_featured']);
    Route::get('latest', [BookController::class, 'get_latest']);

    Route::middleware('auth')->group(function () {
        Route::post('review/{id}', [BookController::class, 'review_book']);

        Route::post('category', [CategoryController::class, 'create_category']);
        Route::post('author', [BookController::class, 'add_author']);
        Route::prefix('book')->group(function () {
            Route::post('', [BookController::class, 'add_book']);
            Route::delete('{id}', [BookController::class, 'delete_book']);
            Route::put('{id}', [BookController::class, 'update_book']);
        });
        Route::prefix('wishlist')->group(function () {
            Route::post('add', [BookController::class, 'add_to_wishlist']);
            Route::get('all', [BookController::class, 'get_wishlist']);
            Route::delete('{id}', [BookController::class, 'remove_from_wishlist']);
        });
    });

});

Route::get('/{any?}', function() {
    return view('welcome');
});
