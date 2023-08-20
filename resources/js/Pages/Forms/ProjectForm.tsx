'use client';
import {useRef, FormEventHandler, useEffect, useState} from 'react'
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function ProjectForm(props: any) : JSX.Element {

    const nameInput = useRef<HTMLInputElement>();
    const descriptionInput = useRef<HTMLInputElement>();
    const [disableAddButton, setDisableAddButton] = useState(false);
    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        projectList: [{name:'', description:''}]
    });

    const handleAddProject = () => {
        if(data.projectList.length === 5){
            setDisableAddButton(true);
            return;
        }
        setData('projectList', [
            ...data.projectList,
            {name:'', description:''}
        ]);
    }

    const handleProjectChange = (index: number, filed: string, value: string) => {
        const updatedProjectList: any = [...data.projectList];
        updatedProjectList[index][filed] = value;
        setData('projectList', updatedProjectList);
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('project.store'));
    };

    useEffect(() => {
    if (props.projectList) {
        setData((prevData) => ({
            ...prevData,
            projectList:[...props.projectList]
        }));
    }
    }, [props.projectList]);

    return (
    <Card className='mt-2'>
        <strong className='bg-red-100 text-red-800 p-2 rounded text-center'>You can add up to 5 project</strong>
      <form onSubmit={submit} className="flex flex-col gap-4">
        {data.projectList.map((project, index: number) => (
            <div className='relative' key={index}>
                <Button type="button" className={`bg-red-100 text-red-800 rounded absolute top-0 end-0 ${index ? 'block': 'hidden'}`} onClick={()=> setData('projectList', data.projectList.filter((_, i) => i !== index))}>delete</Button>
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
                    value={project.name}
                    onChange={(e) => handleProjectChange(index,'name', e.target.value)}
                    required
                    type="text"
                />
                {/*@ts-ignore */}
                <InputError message={errors[`projectList.${index}.name`]} className="mt-2" />
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
                    value={project.description}
                    onChange={(e) => handleProjectChange(index,'description', e.target.value)}
                    required
                />
                {/*@ts-ignore */}
                <InputError message={errors['projectList.'+index+'.description']} className="mt-2" />
            </div>
        ))}
        <Button disabled={disableAddButton} type="button" className="bg-green-300 flex justify-center" onClick={handleAddProject}>Add More</Button>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
