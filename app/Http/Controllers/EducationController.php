<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function store(Request $request)
    {
        $validatedDate = $request->validate([
           'institution_name' => 'required|max:255',
           'degree' => 'required|max:255',
           'field_of_study' => 'required|max:255',
           'graduation_year' => 'date_format:Y-m-d',
        ]);

        auth()->user()->education()->updateOrCreate(['user_id' => auth()->user()->id], $validatedDate);

        return redirect()->back();
    }
}
