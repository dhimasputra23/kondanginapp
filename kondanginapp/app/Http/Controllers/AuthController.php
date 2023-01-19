<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ApiCode;

class AuthController extends Controller
{
    public function _construct(){
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(){
        $credentials = request(['email','password']);

        if(! $token = auth()->attempt($credentials)){
            return $this->respondUnAuthorizedRequest(ApiCode::INVALID_CREDENTIALS);
        }

        return $this->respondWithToken($token);
    }

    public function respondWithToken($token){
        return $this->respond([
            'token' => $token,
            'access_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);

    }

    public function logout(){
        auth()->logout();
        return $this->respondWithMessage('User successfully logged out');


    }

    public function refresh(){
        return $this->respondWithToken(auth()->refresh());
    }

    public function me(){
        return $this->respond(auth()->user());

    }
    //
}
