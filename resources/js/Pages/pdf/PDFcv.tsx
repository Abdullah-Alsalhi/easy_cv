import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
// const styles = StyleSheet.create({
//   page: { backgroundColor: 'tomato' },
//   section: { color: 'white', textAlign: 'center', margin: 30 }
// });

// Create Document Component
export const PDFcv = (props: any) => (
  <Document>
    <Page size="A4" style={{backgroundColor: 'white'}}>

    <View style={{padding: '25px', backgroundColor: '#4e83a2'}}>
      <Text style={{fontSize: '32px', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{props.information.first_name} {props.information.last_name}</Text>
      <Text style={{fontSize: '16px', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{props.information.bio}</Text>
    </View>

    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View>
        <Text>Contact</Text>
        <Text>email: {props.contact.email}</Text>
        <Text>phone: {props.contact.phone}</Text>
        {props.mediaList.map((item: any, index: number) => (
          <Text key={index}>{item.name}: {item.url}</Text>
        ))}
      </View>
      <View>
        <Text>Experience</Text>
        {props.experienceList.map((item: any, index: number) => (
          <>
            <Text key={index}>{item.company_name}: {item.job_title} | {item.start_date} - {item.end_date}</Text>
            <Text>{item.description}</Text>
          </>
        ))}
      </View>
    </View>
    </Page>
  </Document>
);