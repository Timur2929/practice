<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index () {
        return view('glavnaya');
    }
    public function create () {
        return view('create');
    }
    public function infoblini () {
        return view('infoblini');
    }
}

