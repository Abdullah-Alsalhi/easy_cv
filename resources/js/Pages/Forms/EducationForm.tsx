'use client';
import {useRef, FormEventHandler, useEffect} from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function EducationForm(props: any) : JSX.Element {

    const instituation_nameInput = useRef<HTMLInputElement>();
    const degreeInput = useRef<HTMLInputElement>();
    const field_of_studyInput = useRef<HTMLInputElement>();
    const graduation_yearInput = useRef<HTMLInputElement>();

    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        instituation_name: '',
        degree: '',
        field_of_study:'',
        graduation_year: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        /* if (data.instituation_name){
            
            post(route('education.update', data) , {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: (errors) => {
                    if (errors.instituation_name) {
                        reset('instituation_name');
                        firstNameInput.current?.focus();
                    }
    
                    if (errors.degree) {
                        reset('degree');
                        middleNameInput.current?.focus();
                    }
    
                    if (errors.last_name) {
                        reset('last_name');
                        lastNameInput.current?.focus();
                    }
    
                    if (errors.bio) {
                        reset('bio');
                        bioInput.current?.focus();
                    }
    
                    if (errors.country) {
                        reset('country');
                        countryInput.current?.focus();
                    }
    
                    if (errors.city) {
                        reset('city');
                        cityInput.current?.focus();
                    }
                }
            })
        }
        else { */    
            post(route('education.store'));
        // }
    };

    useEffect(() => {
    if (props.education) {
        setData((prevData) => ({
            ...prevData,
            ...props.education
        }));
    }
    }, [props.education]);

    return (
    <Card>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="instituation_name"
              value="instituation_name"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="instituation_name"
            name="instituation_name"
            value={data.instituation_name}
            onChange={(e) => setData('instituation_name', e.target.value)}
            required
            type="instituation_name"
          />
          <InputError message={errors.instituation_name} className="mt-2" />
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
            value={data.degree}
            onChange={(e) => setData('degree', e.target.value)}
            required
            type="degree"
          />
          <InputError message={errors.degree} className="mt-2" />
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
            value={data.field_of_study}
            onChange={(e) => setData('field_of_study', e.target.value)}
            required
            type="field_of_study"
          />
          <InputError message={errors.field_of_study} className="mt-2" />
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
            value={data.graduation_year}
            onChange={(e) => setData('graduation_year', e.target.value)}
            required
            type="graduation_year"
          />
          <InputError message={errors.graduation_year} className="mt-2" />
        </div>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
