<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    /**
     * @param RegisterRequest $request
     * @return JsonResponse
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $data = (object) $validated;

        $faker = \Faker\Factory::create();

        $data->avatar = $faker->imageUrl();
        $data->password = Hash::make($data->password);

        $user = User::create((array) $data);

        return response()->json([
            'error' => false,
            'data' => $user
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                'error' => false,
                'data' => Auth::user()
            ]);
        }

        return response()->json([
            'error' => true,
            'msg' => 'login failed'
        ], 400);
    }
    /**
     * logout user
     *
     * @param Request $request
     * @return void
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([ 'error' => false ]);
    }
}
