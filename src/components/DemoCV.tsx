import { DemoCVProps } from "../helpers/types";
import dayjs, { Dayjs } from 'dayjs';

export const DemoCV: React.FC<DemoCVProps> = ({personalData, educationData, experienceData}) => {
  console.log(experienceData)
  return (
    <>
      <div className="personal-info" style={{ backgroundColor:'red'}}>
        <div className="personal-info__name">{personalData.name}</div>
        <div className="personal-info__email">{personalData.email}</div>
        <div className="personal-info__phone">{personalData.phone}</div>
        <div className="personal-info__location">{personalData.location}</div>
      </div>
      <div className="education-container" style={{ backgroundColor:'blue'}}>
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
      <div className="experience-container"></div>
    </>
  )
}