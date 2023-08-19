<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // User can have only one information
    public function information()
    {
        return $this->hasOne(Information::class);
    }

    // User can have only on contact form
    public function contact()
    {
        return $this->hasOne(Contact::class);
    }

    // User can have one or more educations
    public function education()
    {
        return $this->hasMany(Education::class);
    }
    
    // User can have one or more media
    public function media()
    {
        return $this->hasMany(Media::class);
    }

    // User can have one or more skills
    public function skill()
    {
        return $this->hasMany(Skill::class);
    }

}
