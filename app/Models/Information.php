<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'country',
        'city',
        'bio',
        'user_id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
