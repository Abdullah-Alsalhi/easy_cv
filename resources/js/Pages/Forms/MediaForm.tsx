'use client';
import {useRef, FormEventHandler, useEffect, useState} from 'react'
import { Button, Card, Label, TextInput } from 'flowbite-react';

import InputError from '@/Components/InputError';

import {useForm} from "@inertiajs/react";


export default function MediaForm(props: any) : JSX.Element {

    const nameInput = useRef<HTMLInputElement>();
    const urlInput = useRef<HTMLInputElement>();
    const [disableAddButton, setDisableAddButton] = useState(false);
    const { data, setData, errors, get, put, post, reset, processing, recentlySuccessful } = useForm({
        mediaList: [{name:'', url:''}]
    });

    const handleAddMedia = () => {
        if(data.mediaList.length === 3){
            setDisableAddButton(true);
            return;
        }
        setData('mediaList', [
            ...data.mediaList,
            {name:'', url:''}
        ]);
    }

    const handleMediaChange = (index: number, filed: string, value: string) => {
        const updatedMediaList: any = [...data.mediaList];
        updatedMediaList[index][filed] = value;
        setData('mediaList', updatedMediaList);
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('media.store'));
    };

    useEffect(() => {
    if (props.mediaList) {
        setData((prevData) => ({
            ...prevData,
            mediaList:[...props.mediaList]
        }));
    }
    }, [props.mediaList]);

    return (
    <Card className='mt-2'>
        <strong className='bg-red-100 text-red-800 p-2 rounded text-center'>You can add up to 3 media</strong>
      <form onSubmit={submit} className="flex flex-col gap-4">
        {data.mediaList.length > 0 && data.mediaList.map((media, index: number) => (
            <div className='relative' key={index}>
                <Button type="button" className={`bg-red-100 text-red-800 rounded absolute top-0 end-0 ${index ? 'block': 'hidden'}`} onClick={()=> setData('mediaList', data.mediaList.filter((_, i) => i !== index))}>delete</Button>
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
                value={media.name}
                onChange={(e) => handleMediaChange(index,'name', e.target.value)}
                required
                type="text"
                />
                {/*@ts-ignore */}
                <InputError message={errors[`mediaList.${index}.name`]} className="mt-2" />
                    <div className="mb-2 block">
                    <Label
                        htmlFor="url"
                        value="url"
                        />
                        <span className="text-red-800">
                            <strong> **</strong>
                        </span>
                    </div>
                    <TextInput
                    id="url"
                    name="url"
                    value={media.url}
                    onChange={(e) => handleMediaChange(index,'url', e.target.value)}
                    required
                    type="text"
                    />
                    {/*@ts-ignore */}
                    <InputError message={errors['mediaList.'+index+'.url']} className="mt-2" />
                </div>
        ))}
        <Button disabled={disableAddButton} type="button" className="bg-green-300 flex justify-center" onClick={handleAddMedia}>Add More</Button>
        <Button type="submit" className="bg-green-300 flex justify-center">
          Save
        </Button>
      </form>
    </Card>
  )
}
