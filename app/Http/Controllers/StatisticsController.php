<?php

namespace App\Http\Controllers;

use App\Models\Statistics;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatisticsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statistics = Statistics::with(['user'])->orderBy('task_count','desc')->limit(10)->get();
        return Inertia::render('Statistics/Index', ['statistics' => $statistics]);
    }
}
