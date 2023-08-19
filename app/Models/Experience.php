<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'job_title',
        'description',
        'start_date',
        'end_date',
        'job_location',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
