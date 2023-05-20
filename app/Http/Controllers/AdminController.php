<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Admin::where('name', 'LIKE', '%'.request('search').'%')->get(['id','name'])->toArray();
    }
}
