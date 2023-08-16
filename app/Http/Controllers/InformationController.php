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
       return Inertia::render('Dashboard');
   }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'middle_name' => '',
            'last_name' => 'required',
            'bio' => 'required',
            'country' => '',
            'city' => ''
        ]);

        $validatedData['user_id'] = auth()->user()->id;

        auth()->user()->information()->updateOrCreate(
            ['user_id' => auth()->user()->id], // Unique identifier
            $validatedData // Data to be updated or created
        );
        
        return redirect()->route('dashboard');
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
