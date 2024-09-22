import { Button} from "@mui/joy";

import { DemoCVProps } from "../helpers/types";

import { useRef } from "react";

import { CV_FORM } from "../helpers/constants";

import toPDF from 'react-to-pdf';

import { PersonalDemo } from "./PersonalDemo";
import { EducationDemo } from "./EducationDemo";
import { ExperienceDemo } from "./ExperienceDemo";

export const DemoCV: React.FC<DemoCVProps> = ({personalData, educationData, experienceData}) => {

  const componentRef = useRef(null);

  const handlePDF = () => {
    toPDF(componentRef, {
      filename: 'my_cv.pdf',
      page: {
        format: 'a4',
        orientation: 'portrait',
        margin: {
          top: 0,
          right: 10,
          bottom: 10,
          left: 10
        },
      },
    });
  };

  return (
    <>
    <div className="cv-demo__paper-container" ref={componentRef}>
      <PersonalDemo personalData={personalData}/>

      <EducationDemo educationData={educationData} />

      <ExperienceDemo experienceData={experienceData}/>
    </div>
    
    <Button onClick={handlePDF} className="button--default">{CV_FORM.PDF}</Button>
    </>
  )
}