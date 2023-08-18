import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
// components
import InformationForm from "@/Pages/Forms/InformationForm";
import ContactForm from '@/Pages/Forms/ContactForm';
import EducationForm from './Forms/EducationForm';
export default function Dashboard({ auth, information, contact, education }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 grid grid-cols-12 gap-4">
                            <div className="sm:col-span-6 col-span-12">
                                <InformationForm information={information}/>
                            </div>
                            <div className="sm:col-span-6 col-span-12">
                                <ContactForm contact={contact} />
                                <div className='mt-2'>
                                    <EducationForm eductaion={education}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
