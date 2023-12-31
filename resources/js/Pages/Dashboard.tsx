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
// reactpdf
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import {PDFcv} from '@/Pages/pdf/PDFcv';
import { Button } from 'flowbite-react';
// import {saveAs} from 'file-saver';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function Dashboard({
  auth,
  data
}: any) {


  console.log(data.data.information)
  console.log(data.data.contact)
  console.log(data.data.educationList)
  console.log(data.data.mediaList)
  console.log(data.data.skillList)
  console.log(data.data.projectList)
  console.log(data.data.experienceList)
  console.log(data)
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
                <InformationForm information={data.data.information}/>
                <ContactForm contact={data.data.contact} />
                <EducationForm educationList={data.data.educationList}/>
                <MediaForm mediaList={data.data.mediaList}/>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <SkillForm skillList={data.data.skillList}/>
                <ProjectForm projectList={data.data.projectList}/>
                <ExperienceForm experienceList={data.data.experienceList}/>
              </div>
              <Button className='bg-red-700 text-white col-span-12'>
                {/* todo: this need refactoring */}
                {/* <PDFDownloadLink document={<PDFcv information={data.data.information} contact={data.data.contact} educationList={data.data.educationList} mediaList={data.data.mediaList} skillList={data.data.skillList} projectList={data.data.projectList} experienceList={data.data.experienceList}/>} fileName={`cv-${auth.user.name}-${new Date().getFullYear()}.pdf`}>
                  {({ blob, url, loading, error }) => loading ? 'Loading document...' : 'Download now!'}
                </PDFDownloadLink> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}