<?php

namespace App\Http\Controllers;

use App\Models\Information;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
class InformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Inertia::render('Dashboard', ['information' => auth()->user()->information()->first()]);
    }

    /**
     * Show the form for creating a new resource.
     */
   public function create()
   {
    //    return Inertia::render('Dashboard');
   }

    /**
     * Store a newly created resource in storage.
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

        $validatedData['user_id'] = auth()->user()->id;

        $insertedData = auth()->user()->information()->updateOrCreate(['user_id' => auth()->user()->id], $validatedData);
        
        return Inertia::render('Information/InformationForm',[
            'information' => $insertedData
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Information $informations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Information $informations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Information $informations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Information $informations)
    {
        //
    }
}
