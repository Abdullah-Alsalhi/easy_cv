<?php
namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Information;
use App\Models\Education;
use App\Models\User;
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
});

// Todo: everything here gonna change

Route::get('/dashboard', function () {
    $information = Information::select('first_name', 'middle_name', 'last_name', 'bio', 'country', 'city')->first();
    $contact = Contact::select('email', 'phone')->first();
    $education = Education::select('institution_name', 'degree', 'field_of_study', 'graduation_year')->first();
    return Inertia::render('Dashboard', [
        'information' => $information,
        'contact' => $contact,
        'education' => $education
    ]);
})->/* middleware(['auth', 'verified'])-> */name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/*
 *
 *
 */
Route::post('information', [InformationController::class, 'store'])->name('information.store');
Route::post('contact', [ContactController::class, 'store'])->name('contact.store');
Route::post('education', [EducationController::class, 'store'])->name('education.store');

require __DIR__.'/auth.php';
