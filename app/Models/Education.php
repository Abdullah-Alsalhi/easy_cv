<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'educations';

    protected $fillable = [
        'institution_name',
        'degree',
        'field_of_study',
        'graduation_year',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
