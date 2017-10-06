<?php

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

use Illuminate\Support\Facades\DB;


Route::get('/', function () {
    return File::get(public_path() . '/index.html');
});

Route::get('/api/migration/{year}/{aou}', function($year, $aou) {
    $routes = DB::select('select routes.longitude, routes.latitude, fifty.AOU from fifty, routes where fifty.year = '.$year.' AND fifty.AOU = '.$aou.' AND fifty.Route = routes.Route');
    return response($routes, 200);
});

Route::get('/api/route', function() {
    $routes = DB::select('select * from routes');
    return response($routes, 200);
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
