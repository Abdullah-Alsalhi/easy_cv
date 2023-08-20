import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import InformationForm from "@/Pages/Forms/InformationForm";
import ContactForm from '@/Pages/Forms/ContactForm';
import EducationForm from '@/Pages/Forms/EducationForm';
import MediaForm from '@/Pages/Forms/MediaForm';
import SkillForm from '@/Pages/Forms/SkillForm';
import ProjectForm from '@/Pages/Forms/ProjectForm';
import ExperienceForm from '@/Pages/Forms/ExperienceForm';

export default function Dashboard({
  auth,
  information,
  contact,
  educationList,
  mediaList,
  skillList,
  projectList,
  experienceList
}: PageProps) {
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
              </div>
              <div className='sm:col-span-6 col-span-12'>
                <EducationForm educationList={educationList}/>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <MediaForm mediaList={mediaList}/>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <SkillForm skillList={skillList}/>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <ProjectForm projectList={projectList}/>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <ExperienceForm experienceList={experienceList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}