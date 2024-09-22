import { CV_FORM } from "../helpers/constants";

import { EducationDemoProps } from "../helpers/types";

import { Chip, Divider } from "@mui/joy";

export const EducationDemo: React.FC<EducationDemoProps> = ({educationData}) => {
  return (
    <div className="education-container">
      <Divider>
        <Chip variant="soft" color="neutral" size="lg">
          {CV_FORM.EDUCATION.toUpperCase()}
        </Chip>
      </Divider>
      {educationData.map(educationItem => (
        <div key={educationItem.id} className="education-info">
          <div className="education-info__first-container">
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
          <div className="education-info__second-container">
            <div className="education-info__degree">{educationItem.degree}</div>
            <div className="education-info__school">{educationItem.school}</div>
          </div>
        </div>
      ))}
    </div>
    
  )
}