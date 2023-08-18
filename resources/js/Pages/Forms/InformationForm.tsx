'use client';
import {useRef, FormEventHandler, useEffect} from 'react'
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function InformationForm(props: any) : JSX.Element {

    const firstNameInput = useRef<HTMLInputElement>();
    const middleNameInput = useRef<HTMLInputElement>();
    const lastNameInput = useRef<HTMLInputElement>();

    const bioInput = useRef<HTMLTextAreaElement>();

    const countryInput = useRef<HTMLInputElement>();
    const cityInput = useRef<HTMLInputElement>();

    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        bio: '',
        country: '',
        city: ''
    });

    /* 
    Todo: I think to do query to check if entity exists
        * update the entity
        * or 
        * create the entity
        * when the component mounted i want to show the fields values
        * solve the data object issue when it's rendred from dashboard
    */

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        /* if (data.first_name){
            
            post(route('information.update', data) , {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: (errors) => {
                    if (errors.first_name) {
                        reset('first_name');
                        firstNameInput.current?.focus();
                    }
    
                    if (errors.middle_name) {
                        reset('middle_name');
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
            post(route('information.store'));
        // }
    };

    useEffect(() => {
    if (props.information) {
        setData((prevData) => ({
            ...prevData,
            ...props.information
        }));
    }
    }, [props.information]);

    return (
    <Card>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="first_name"
              value="First name"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="first_name"
            name="first_name"
            value={data.first_name}
            onChange={(e) => setData('first_name', e.target.value)}
            required
            type="text"
          />
          <InputError message={errors.first_name} className="mt-2" />
        </div>
          <div>
              <div className="mb-2 block">
                  <Label
                      htmlFor="middle_name"
                      value="Middle name"
                  />
              </div>
              <TextInput
                  id="middle_name"
                  name="middle_name"
                  value={data.middle_name}
                  onChange={(e) => setData('middle_name', e.target.value)}
                  type="text"
              />
              <InputError message={errors.middle_name} className="mt-2" />
          </div>
          <div>
              <div className="mb-2 block">
                  <Label
                      htmlFor="last_name"
                      value="Last name"
                  />
                  <span className="text-red-800">
                    <strong> **</strong>
                  </span>
              </div>
              <TextInput
                  id="last_name"
                  name="last_name"
                  value={data.last_name}
                  onChange={(e) => setData('last_name', e.target.value)}
                  required
                  type="text"
              />
              <InputError message={errors.last_name} className="mt-2" />
          </div>

          <div
              className=""
              id="bio"
          >
              <div className="mb-2 block">
                  <Label
                      htmlFor="bio"
                      value="Biography"
                  />
                  <span className="text-red-800">
                    <strong> **</strong>
                  </span>
              </div>
              <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Leave in 200 characters yourself..."
                  value={data.bio}
                  onChange={(e) => setData('bio', e.target.value)}
                  required
              />
              <InputError message={errors.bio} className="mt-2" />
          </div>
          <div>
              <div className="mb-2 block">
                  <Label
                      htmlFor="country"
                      value="Country"
                  />
              </div>
              <TextInput
                  id="country"
                  name="country"
                  value={data.country}
                  onChange={(e) => setData('country', e.target.value)}
                  type="text"
              />
              <InputError message={errors.country} className="mt-2" />
          </div>
          <div>
              <div className="mb-2 block">
                  <Label
                      htmlFor="city"
                      value="City"
                  />
              </div>
              <TextInput
                  id="city"
                  name="city"
                  value={data.city}
                  onChange={(e) => setData('city', e.target.value)}
                  type="text"
              />
              <InputError message={errors.city} className="mt-2" />
          </div>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
