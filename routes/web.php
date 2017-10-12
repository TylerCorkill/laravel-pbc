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
//use Illuminate\Support\Facades\Log;


Route::get('/', function () {
    return File::get(public_path() . '/index.html');
});

// get points for map
Route::get('/api/bbs/{year}/{aou}', function($year, $aou) {
    $routes = DB::select('select routes.longitude, routes.latitude, fifty.AOU from fifty, routes where fifty.year = '.$year.' AND fifty.AOU = '.$aou.' AND fifty.Route = routes.Route');
    return response($routes, 200);
});

// get name of species with AOU
Route::get('/api/name/{name}', function($name) {
    $newname = str_replace("_", " ", $name);
    $aou = DB::select("select AOU from species where en_name = '".$newname."'");
    return response($aou, 200);
});



Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');