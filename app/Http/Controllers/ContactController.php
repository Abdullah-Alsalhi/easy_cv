<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    
    // auth middleware

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|max:255',
            'phone' => 'required|numeric|digits_between:10,12',
        ]);

        auth()->user()->contact()->updateOrCreate(['user_id' => auth()->user()->id], $validatedData);
        
        // return redirect()->back();
        return to_route('dashboard');
    }
}
