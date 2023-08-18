'use client';
import {useRef, FormEventHandler, useEffect} from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function ContactForm(props: any) : JSX.Element {

    const emailInput = useRef<HTMLInputElement>();
    const phoneInput = useRef<HTMLInputElement>();
    

    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        email: '',
        phone: '',
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

        /* if (data.email){
            
            post(route('contact.update', data) , {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: (errors) => {
                    if (errors.email) {
                        reset('email');
                        firstNameInput.current?.focus();
                    }
    
                    if (errors.phone) {
                        reset('phone');
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
            post(route('contact.store'));
        // }
    };

    useEffect(() => {
    if (props.contact) {
        setData((prevData) => ({
            ...prevData,
            ...props.contact
        }));
    }
    }, [props.contact]);

    return (
    <Card>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
            />
              <span className="text-red-800">
                  <strong> **</strong>
              </span>
          </div>
          <TextInput
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            type="email"
          />
          <InputError message={errors.email} className="mt-2" />
        </div>
          <div>
              <div className="mb-2 block">
                  <Label
                      htmlFor="phone"
                      value="Phone Number"
                  />
                  <span className="text-red-800">
                  <strong> **</strong>
              </span>
              </div>
              <TextInput
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={(e) => setData('phone', e.target.value)}
                  type="text"
                  placeholder='05xxxxxxxx, 9665xxxxxxxx'
                  required
              />
              <InputError message={errors.phone} className="mt-2" />
          </div>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
