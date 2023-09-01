import { useRef, FormEventHandler, useEffect } from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import InputError from '@/Components/InputError';
import { useForm } from "@inertiajs/react";

export default function ContactForm(props: any): JSX.Element {

    const emailInput = useRef<HTMLInputElement>();
    const phoneInput = useRef<HTMLInputElement>();

    const { data, setData, errors, post } = useForm({
        email: '',
        phone: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    useEffect(() => {
        if (props.contact) {
            setData(props.contact);
        }
    }, [props.contact]);

    return (
        <Card className='mt-2'>
            <form onSubmit={submit} className="flex flex-col gap-4">
                <div>
                    <Label
                        htmlFor="email"
                        value="Email"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
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
                    <Label
                        htmlFor="phone"
                        value="Phone Number"
                    />
                    <span className="text-red-800">
                        <strong> **</strong>
                    </span>
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
