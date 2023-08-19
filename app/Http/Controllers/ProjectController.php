<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Inertia\Inertia;
class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'projectList.*.name' => 'required|max:255',
            'projectList.*.description' => 'required|max:255'
        ]);
        
        Project::where('user_id', auth()->user()->id)->delete();

        foreach ($validatedData['projectList'] as $mediaItem) {
            Project::create([
                'user_id' => auth()->user()->id,
                'name' => $mediaItem['name'],
                'description' => $mediaItem['description']
            ]);
        }
        return Inertia::render('dashboard');
    }
}
