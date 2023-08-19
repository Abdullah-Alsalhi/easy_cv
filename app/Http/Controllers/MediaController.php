<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media;
class MediaController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'mediaList.*.name' => 'required|max:255',
            'mediaList.*.url' => 'required|url|max:255'
        ]);
        
        Media::where('user_id', auth()->user()->id)->delete();

        foreach ($validatedData['mediaList'] as $mediaItem) {
            Media::create([
                'user_id' => auth()->user()->id,
                'name' => $mediaItem['name'],
                'url' => $mediaItem['url']
            ]);
        }

        return redirect('/');
    }
}
