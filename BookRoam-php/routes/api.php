<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/find',"iUserController@find");
Route::get('/user/shareHistory/{id}',"iUserController@shareHistory");
Route::post('/book/borrow',"BookController@borrow");
Route::resource('user', 'iUserController');
Route::resource('book', 'BookController');

Route::get('/book/shared/{id}',"BookController@sharedPeople");
Route::get('/book/recommend/{id}',"BookController@recommend");


