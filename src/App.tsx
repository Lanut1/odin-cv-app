import { PersonalInfo } from './components/PersonalInfo'
import './App.css'
import React, { useState } from 'react';
import { DemoCV } from './components/DemoCV';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy';
import { Education } from './components/Education';
import { EducationInfo, ExperienceInfo, PersonalData } from './helpers/types';
import { Experience } from './components/Experience';

function App() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const [educationData, setEducationData] = useState<EducationInfo[]>([]);

  const [experienceData, setExperienceData] = useState<ExperienceInfo[]>([]);

  const [index, setIndex] = React.useState<number | null>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const updateEducation = (newEducation: EducationInfo) => {
    setEducationData(prevData => 
      prevData.some(item => item.id === newEducation.id)
        ? prevData.map(item => item.id === newEducation.id ? newEducation : item)
        : [...prevData, newEducation]
    );
  }

  const updateExperience = (newExperience: ExperienceInfo) => {
    setExperienceData(prevData => 
      prevData.some(item => item.id === newExperience.id)
        ? prevData.map(item => item.id === newExperience.id ? newExperience : item)
        : [...prevData, newExperience]
    );
  }

  const deleteEducation = (educationToDelete: EducationInfo) => {
    setEducationData(prevData => 
      prevData.filter(education => education.id !== educationToDelete.id)
    )
  }

  const deleteExperience = (experienceToDelete: ExperienceInfo) => {
    setExperienceData(prevData => 
      prevData.filter(education => education.id !== experienceToDelete.id)
    )
  }

  return (
    <>
    <AccordionGroup>
      <Accordion expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}>
        <AccordionSummary>Personal Info</AccordionSummary>
        <AccordionDetails>
          <PersonalInfo
            personalData={personalData}
            onChange={(event) => handleInputChange(event)}
            />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}>
        <AccordionSummary>Education</AccordionSummary>
        <AccordionDetails>
          <Education
            educationData={educationData}
            updateEducation={updateEducation}
            deleteEducation={deleteEducation}
            />
        </AccordionDetails>
        </Accordion>
      <Accordion expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}>
        <AccordionSummary>Experience</AccordionSummary>
        <AccordionDetails>
          <Experience
            experienceData={experienceData}
            updateExperience={updateExperience}
            deleteExperience={deleteExperience}
          />
        </AccordionDetails>
      </Accordion>

    </AccordionGroup>
    <DemoCV
      personalData={personalData}
      educationData={educationData}
      experienceData={experienceData}
      />
    </>
  )
}

export default App
