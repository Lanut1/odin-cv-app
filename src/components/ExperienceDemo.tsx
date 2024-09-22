import { CV_FORM } from "../helpers/constants";

import { ExperienceDemoProps } from "../helpers/types";

import { Chip, Divider } from "@mui/joy";

export const ExperienceDemo: React.FC<ExperienceDemoProps> = ({experienceData}) => {
  console.log(experienceData)
  return (
    <div className="experience-container">
        <Divider>
          <Chip variant="soft" color="neutral" size="lg">
            {CV_FORM.EXPERIENCE.toUpperCase()}
          </Chip>
        </Divider>
        {experienceData.map(experienceItem => (
           <div key={experienceItem.id} className="experience-info">
            <div className="experience-info__first-container">
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
            </div>
            <div className="experience-info__second-container">
              <div className="experience-info__position">{experienceItem.position}</div>
              <div className="experience-info__company">{experienceItem.company}</div>
              <div className="experience-info__description">{experienceItem.description}</div>
            </div>
          </div>
        )) }
      </div>
  )
}