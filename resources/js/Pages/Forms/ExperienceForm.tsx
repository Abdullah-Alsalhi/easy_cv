'use client';
import {useRef, FormEventHandler, useEffect, useState} from 'react'
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function ExperienceForm(props: any) : JSX.Element {

    const nameInput = useRef<HTMLInputElement>();
    const descriptionInput = useRef<HTMLInputElement>();
    const [disableAddButton, setDisableAddButton] = useState(false);
    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        experienceList: [{company_name:'',job_title:'' , description:'', start_date:'', end_date:'', job_location:''}]
    });

    const handleAddexperience = () => {
        if(data.experienceList.length === 5){
            setDisableAddButton(true);
            return;
        }
        setData('experienceList', [
            ...data.experienceList,
            {company_name:'',job_title:'' , description:'', start_date:'', end_date:'', job_location:''}
        ]);
    }

    const handleExperienceChange = (index: number, filed: string, value: string) => {
        const updatedExperienceList: any = [...data.experienceList];
        updatedExperienceList[index][filed] = value;
        setData('experienceList', updatedExperienceList);
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('experience.store'));
    };

    useEffect(() => {
    if (props.experienceList) {
        setData((prevData) => ({
            ...prevData,
            experienceList:[...props.experienceList]
        }));
    }
    }, [props.experienceList]);

    return (
    <Card>
        <strong className='bg-red-100 text-red-800 p-2 rounded text-center'>You can add up to 5 experience</strong>
      <form onSubmit={submit} className="flex flex-col gap-4">
        {data.experienceList.map((experience, index: number) => (
            <div className='relative' key={index}>
                <Button type="button" className={`bg-red-100 text-red-800 rounded absolute top-0 end-0 ${index ? 'block': 'hidden'}`} onClick={()=> setData('experienceList', data.experienceList.filter((_, i) => i !== index))}>delete</Button>
                <div className="mb-2 block">
                <Label
                    htmlFor="company_name"
                    value="company_name"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
                </div>
                <TextInput
                    id="company_name"
                    name="company_name"
                    value={experience.company_name}
                    onChange={(e) => handleExperienceChange(index,'company_name', e.target.value)}
                    required
                    type="text"
                />
                {/*@ts-ignore */}
                <InputError message={errors[`experienceList.${index}.company_name`]} className="mt-2" />
                <div className="mb-2 block">
                <Label
                    htmlFor="job_title"
                    value="job_title"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
                </div>
                <TextInput
                    id="job_title"
                    name="job_title"
                    value={experience.job_title}
                    onChange={(e) => handleExperienceChange(index,'job_title', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['experienceList.'+index+'.job_title']} className="mt-2" />
                <div className="mb-2 block">
                <Label
                    htmlFor="description"
                    value="description"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
                </div>
                <Textarea
                    id="description"
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleExperienceChange(index,'description', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['experienceList.'+index+'.description']} className="mt-2" />
                <div className="mb-2 block">
                <Label
                    htmlFor="start_date"
                    value="Start date"
                    />
                </div>
                <TextInput
                    id="start_date"
                    name="start_date"
                    value={experience.start_date}
                    onChange={(e) => handleExperienceChange(index,'start_date', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['experienceList.'+index+'.start_date']} className="mt-2" />
                <div className="mb-2 block">
                <Label
                    htmlFor="end_date"
                    value="End date"
                    />
                </div>
                <TextInput
                    id="end_date"
                    name="end_date"
                    value={experience.end_date}
                    onChange={(e) => handleExperienceChange(index,'end_date', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['experienceList.'+index+'.end_date']} className="mt-2" />
                <div className="mb-2 block">
                <Label
                    htmlFor="job_location"
                    value="Job location"
                    />
                </div>
                <TextInput
                    id="job_location"
                    name="job_location"
                    value={experience.job_location}
                    onChange={(e) => handleExperienceChange(index,'job_location', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['experienceList.'+index+'.job_location']} className="mt-2" />
            </div>
        ))}
        <Button disabled={disableAddButton} type="button" className="bg-green-300 flex justify-center" onClick={handleAddexperience}>Add More</Button>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
