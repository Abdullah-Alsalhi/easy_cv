<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Experience;
use Inertia\Inertia;

class ExperienceController extends Controller
{

    /*
      
      
        company_name',
        'job_title',
        'description',
        'start_date',
        'end_date',
        'job_location',
        'user_id',
    
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'experienceList.*.company_name' => 'required|max:255',
            'experienceList.*.job_title' => 'required|max:255',
            'experienceList.*.description' => 'required|max:255',
            'experienceList.*.start_date' => 'date|date_format:Y-m',
            'experienceList.*.end_date' => 'date|date_format:Y-m',
            'experienceList.*.job_location' => 'max:255',
        ]);

        Experience::where('user_id', auth()->user()->id)->delete();

        foreach ($validatedData['experienceList'] as $experienceItem) {
            Experience::create([
                'user_id' => auth()->user()->id,
                'company_name' => $experienceItem['company_name'],
                'job_title' => $experienceItem['job_title'],
                'description' => $experienceItem['description'],
                'start_date' => $experienceItem['start_date'],
                'end_date' => $experienceItem['end_date'],
                'job_location' => $experienceItem['job_location'],
            ]);
        }
        return Inertia::render('dashboard');
    }
}