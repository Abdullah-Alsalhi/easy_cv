<?php
namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Information;
use App\Models\Education;
use App\Models\Media;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Experience;
use App\Http\Resources\UserData;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Welcome');

// Todo: everything here gonna change

Route::get('/dashboard', function () {
    // $information = Information::select('first_name', 'middle_name', 'last_name', 'bio', 'country', 'city')->first();
    // $contact = Contact::select('email', 'phone')->first();
    // $educationList = Education::select('institution_name', 'degree', 'field_of_study', 'graduation_year')->get();
    // $mediaList = Media::select('name', 'url')->get();
    // $skillList = Skill::select('name')->get();
    // $projectList = Project::select('name', 'description')->get();
    // $experienceList = Experience::select('company_name', 'job_title', 'description', 'start_date', 'end_date', 'job_location')->get();

    return Inertia::render('Dashboard', ['data' => new UserData(auth()->user())]);
})->name('dashboard');


//     return Inertia::render('Dashboard', [
//         'information' => $information,
//         'contact' => $contact,
//         'educationList' => $educationList,
//         'mediaList' => $mediaList,
//         'skillList' => $skillList,
//         'projectList' => $projectList,
//         'experienceList' => $experienceList
//     ]);
// })-> /* middleware(['auth', 'verified'])-> */name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('information', InformationController::class)->only(['store']);
Route::resource('contact', ContactController::class)->only(['store']);
Route::resource('education', EducationController::class)->only(['store']);
Route::resource('media', MediaController::class)->only(['store']);
Route::resource('skill', SkillController::class)->only(['store']);
Route::resource('project', ProjectController::class)->only(['store']);
Route::resource('experience', ExperienceController::class)->only(['store']);


// pdf route
Route::get('/generate-pdf', [PdfController::class, 'generatePdf'])->name('generate-pdf');
require __DIR__ . '/auth.php';