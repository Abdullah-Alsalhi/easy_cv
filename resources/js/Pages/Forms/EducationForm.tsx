'use client';
import {useRef, FormEventHandler, useEffect, useState} from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function EducationForm(props: any) : JSX.Element {

    const institution_nameInput = useRef<HTMLInputElement>();
    const degreeInput = useRef<HTMLInputElement>();
    const field_of_studyInput = useRef<HTMLInputElement>();
    const graduation_yearInput = useRef<HTMLInputElement>();
    const [disableAddButton, setDisableAddButton] = useState(false);
    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        educationList: [{institution_name:'', degree:'', field_of_study:'', graduation_year:''}]
    });


    const handleAddEducation = () => {
      if(data.educationList.length === 3){
          setDisableAddButton(true);
          return;
      }
      setData('educationList', [
          ...data.educationList,
          {institution_name:'', degree:'', field_of_study:'', graduation_year:''}
      ]);
    }

    const handleEducationChange = (index: number, filed: string, value: string) => {
      const updatedEducationList: any = [...data.educationList];
      updatedEducationList[index][filed] = value;
      setData('educationList', updatedEducationList);
  }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
            post(route('education.store'));
    };

    useEffect(() => {
    if (props.educationList) {
        setData((prevData) => ({
            ...prevData,
            educationList:[...props.educationList]
        }));
        console.log(data.educationList);
    }
    }, [props.educationList]);

    return (
    <Card>
      <strong className='bg-red-100 text-red-800 p-2 rounded text-center'>You can add up to 3 Education</strong>
      <form onSubmit={submit} className="flex flex-col gap-4">
        {data.educationList.map((education, index: number) => (
        <div className='relative' key={index}>
          <Button type="button" className={`bg-red-100 text-red-800 rounded absolute top-0 end-0 ${index ? 'block': 'hidden'}`} onClick={()=> setData('educationList', data.educationList.filter((_, i) => i !== index))}>delete</Button>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="institution_name"
              value="institution_name"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="institution_name"
            name="institution_name"
            value={education.institution_name}
            onChange={(e) => handleEducationChange(index,'institution_name', e.target.value)}
            required
            type="institution_name"
          />
          {/*@ts-ignore */}
          <InputError message={errors[`educationList.${index}.institution_name`]} className="mt-2" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="degree"
              value="degree"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="degree"
            name="degree"
            value={education.degree}
            onChange={(e) => handleEducationChange(index,'degree', e.target.value)}
            required
            type="degree"
          />
          {/*@ts-ignore */}
          <InputError message={errors[`educationList.${index}.degree`]} className="mt-2" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="field_of_study"
              value="field_of_study"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="field_of_study"
            name="field_of_study"
            value={education.field_of_study}
            onChange={(e) => handleEducationChange(index,'field_of_study', e.target.value)}
            required
            type="field_of_study"
          />
          {/*@ts-ignore */}
          <InputError message={errors[`educationList.${index}.field_of_study`]} className="mt-2" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="graduation_year"
              value="graduation_year"
            />
          </div>
          <TextInput
            id="graduation_year"
            name="graduation_year"
            value={education.graduation_year}
            onChange={(e) => handleEducationChange(index,'graduation_year', e.target.value)}
            type="graduation_year"
          />
          {/*@ts-ignore */}
          <InputError message={errors[`educationList.${index}.graduation_year`]} className="mt-2" />
        </div>
        </div>
        ))}
        <Button disabled={disableAddButton} type="button" className="bg-green-300 flex justify-center" onClick={handleAddEducation}>Add More</Button>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
