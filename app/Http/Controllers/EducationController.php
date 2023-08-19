<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Education;
class EducationController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
           'educationList.*.institution_name' => 'required|max:255',
           'educationList.*.degree' => 'required|max:255',
           'educationList.*.field_of_study' => 'required|max:255',
           'educationList.*.graduation_year' => 'date_format:Y-m-d',
        ]);

        Education::where('user_id', auth()->user()->id)->delete();

        foreach($validatedData['educationList'] as $educationItem)
        {
            Education::create([
                'user_id' => auth()->user()->id,
                'institution_name' => $educationItem['institution_name'],
                'degree' => $educationItem['degree'],
                'field_of_study' => $educationItem['field_of_study'],
                'graduation_year' => $educationItem['graduation_year'],
            ]);
        }

        return Inertia::location(route('dashboard'));
        // auth()->user()->education()->updateOrCreate(['user_id' => auth()->user()->id], $validatedDate);
    }
}
