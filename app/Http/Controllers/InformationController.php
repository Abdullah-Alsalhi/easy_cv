<?php

namespace App\Http\Controllers;

use App\Models\Information;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
class InformationController extends Controller
{
    
    /**
     * Store a newly created or updated resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|max:16',
            'middle_name' => 'max:16',
            'last_name' => 'required|max:16',
            'bio' => 'required|max:200',
            'country' => 'max:30',
            'city' => 'max:16',
        ]);

        auth()->user()->information()->updateOrCreate(['user_id' => auth()->user()->id], $validatedData);
        
        return Inertia::location(route('dashboard'));
    }
}
