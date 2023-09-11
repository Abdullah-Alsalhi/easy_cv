<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);

        return [
            'information' => $this->information,
            'contact' => $this->contact,
            'educationList' => $this->education,
            'mediaList' => $this->media,
            'skillList' => $this->skill,
            'projectList' => $this->project,
            'experienceList' => $this->experience
        ];
    }
}