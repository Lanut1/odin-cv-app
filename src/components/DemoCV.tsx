import { Button, Chip, Divider } from "@mui/joy";

import { DemoCVProps } from "../helpers/types";

import { useRef } from "react";

import { useReactToPrint } from 'react-to-print';
import { CV_FORM } from "../helpers/constants";
import { LocationCity, Mail, Phone } from "@mui/icons-material";

export const DemoCV: React.FC<DemoCVProps> = ({personalData, educationData, experienceData}) => {

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
    `,
  });

  return (
    <>
    <div className="cv-demo__paper-container" ref={componentRef}>
      <div className="personal-info">
        <div className="personal-info__name">{personalData.name}</div>
        <div className="personal-info__email"><Mail/>{personalData.email}</div>
        <div className="personal-info__phone-location__container">
          <div className="personal-info__phone"><Phone/>{personalData.phone}</div>
          <div className="personal-info__location"><LocationCity/>{personalData.location}</div>
        </div>
      </div>
      <div className="education-container">
        <Divider>
          <Chip variant="soft" color="neutral" size="lg">
            {CV_FORM.EDUCATION.toUpperCase()}
          </Chip>
        </Divider>
        {educationData.map(educationItem => (
          <div key={educationItem.id} className="education-info">
            <div className="education-info__school">{educationItem.school}</div>
            <div className="education-info__degree">{educationItem.degree}</div>
            <div className="education-info__duration">
            {educationItem.startDate || educationItem.endDate ? (
              <>
                {educationItem.startDate?.format('MM/YYYY')}
                {' - '}
                {educationItem.endDate ? educationItem.endDate.format('MM/YYYY') : 'present'}
              </>
            ) : 'present'}
            </div>
            <div className="education-info__location">{educationItem.location}</div>
          </div>
        ))}
        
      </div>
      <div className="experience-container">
        <Divider>
          <Chip variant="soft" color="neutral" size="lg">
            {CV_FORM.EXPERIENCE.toUpperCase()}
          </Chip>
        </Divider>
        {experienceData.map(experienceItem => (
          <div key={experienceItem.id} className="experience-info">
            <div className="experience-info__company">{experienceItem.company}</div>
            <div className="experience-info__position">{experienceItem.position}</div>
            <div className="experience-info__duration">
              {experienceItem.startDate || experienceItem.endDate ? (
                <>
                  {experienceItem.startDate?.format('MM/YYYY')}
                  {' - '}
                  {experienceItem.endDate ? experienceItem.endDate.format('MM/YYYY') : 'present'}
                </>
              ) : 'present'}
            </div>
            <div className="experience-info__location">{experienceItem.location}</div>
            <div className="experience-info__description">{experienceItem.description}</div>
          </div>
        )) }
      </div>
    </div>
    <Button onClick={handlePrint} className="button--default">{CV_FORM.PRINT}</Button>
    </>
  )
}