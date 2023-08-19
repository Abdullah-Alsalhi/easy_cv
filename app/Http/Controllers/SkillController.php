<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;
use Inertia\Inertia;
class SkillController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'skillList.*.name' => 'required|max:255',
        ]);
        
        Skill::where('user_id', auth()->user()->id)->delete();

        foreach ($validatedData['skillList'] as $skillItem) {
            Skill::create([
                'user_id' => auth()->user()->id,
                'name' => $skillItem['name'],
            ]);
        }
        return Inertia::render('dashboard');
    }
}
