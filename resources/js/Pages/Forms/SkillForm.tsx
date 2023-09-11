'use client';
import {useRef, FormEventHandler, useEffect, useState} from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function SkillForm(props: any) : JSX.Element {

    const nameInput = useRef<HTMLInputElement>();
    const [disableAddButton, setDisableAddButton] = useState(false);
    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        skillList: [{name:''}]
    });

    const handleAddskill = () => {
        if(data.skillList.length === 8){
            setDisableAddButton(true);
            return;
        }
        setData('skillList', [
            ...data.skillList,
            {name:''}
        ]);
    }

    const handleSkillChange = (index: number, filed: string, value: string) => {
        const updatedSkillList: any = [...data.skillList];
        updatedSkillList[index][filed] = value;
        setData('skillList', updatedSkillList);
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('skill.store'));
    };

    useEffect(() => {
    if (props.skillList) {
        setData((prevData) => ({
            ...prevData,
            skillList:[...props.skillList]
        }));
    }
    }, [props.skillList]);

    return (
    <Card className='mt-2'>
        <strong className='bg-red-100 text-red-800 p-2 rounded text-center'>You can add up to 8 skill</strong>
      <form onSubmit={submit} className="flex flex-col gap-4">
        {data.skillList.length > 0 && data.skillList.map((skill, index: number) => (
            <div className='relative' key={index}>
                <Button type="button" className={`bg-red-100 text-red-800 rounded absolute top-0 end-0 ${index ? 'block': 'hidden'}`} onClick={()=> setData('skillList', data.skillList.filter((_, i) => i !== index))}>delete</Button>
                <div className="mb-2 block">
                <Label
                    htmlFor="name"
                    value="name"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
                </div>
                <TextInput
                    id="name"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index,'name', e.target.value)}
                    required
                    type="text"
                />
                {/*@ts-ignore */}
                <InputError message={errors[`skillList.${index}.name`]} className="mt-2" />
            </div>
        ))}
        <Button disabled={disableAddButton} type="button" className="bg-green-300 flex justify-center" onClick={handleAddskill}>Add More</Button>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
