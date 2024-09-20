import { useState } from "react";

import { ExperienceInfo, ExperienceInfoProps } from "../helpers/types";

import { Dayjs } from "dayjs";

import {v4 as uuid} from 'uuid';

import { ExperienceInput } from "./ExperienceInput";
import { ExperienceItem } from "./ExperienceItem";

import { Button } from "@mui/joy";

import { LibraryAdd } from "@mui/icons-material";
import { CV_FORM } from "../helpers/constants";

export const Experience: React.FC<ExperienceInfoProps> = ({
  experienceData,
  deleteExperience,
  updateExperience
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperienceData, setCurrentExperienceData] = useState<ExperienceInfo>({
    id: '',
    company: '',
    position: '',
    startDate: null,
    endDate: null,
    location: '',
    description: ''
  });

  const [isPresent, setIsPresent] = useState(!!(!currentExperienceData.endDate && currentExperienceData.startDate));


  const openForm = (experienceToEdit?: ExperienceInfo) => {
    if (experienceToEdit) {
      setCurrentExperienceData(experienceToEdit);
    }

    setIsEditing(true);
  }

  const handleExperienceInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentExperienceData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleDateChange = (date: Dayjs | null, dateType: 'startDate' | 'endDate') => {
    setCurrentExperienceData(prevData => ({
      ...prevData,
      [dateType]: date
    }));
  };

  const handlePresentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPresent(event.target.checked);
    if (event.target.checked) {
      setCurrentExperienceData(prevData => ({
        ...prevData,
        endDate: null
      }));
    }
  }

  const cancelAddingExperience = () => {
    setIsEditing(false);
    setCurrentExperienceData({
      id: '',
      company: '',
      position: '',
      startDate: null,
      endDate: null,
      location: '',
      description: ''
    })
    setIsPresent(false);
  }

  const handleExperienceUpdate = () => {
    const experienceToUpdate = {
      ...currentExperienceData,
      id: currentExperienceData.id || uuid()
    }
    updateExperience(experienceToUpdate);
    cancelAddingExperience();
  }
  return (
    <div className="cv-form__experience-info">
    {isEditing ? (
      <>
        <ExperienceInput
          experienceInputData={currentExperienceData}
          onChange={handleExperienceInputChange}
          handleDateChange={handleDateChange}
          cancelAddingExperience={cancelAddingExperience}
          addExperience={handleExperienceUpdate}
          isPresent={isPresent}
          handlePresentChange={handlePresentChange}
          />
      </>
    )
    : (
      <>
        <div className="cv-form__experience-items">
          {experienceData.map((experience) =>
          <ExperienceItem
            key={experience.id}
            experienceItemData={experience}
            editItem={() => openForm(experience)}
            deleteItem={()=> deleteExperience(experience)}
          />
          )}
        </div>
        <Button onClick={() => openForm()} className="button--default"><LibraryAdd/>{CV_FORM.EXPERIENCE}</Button>
      </>
    )}
  </div>

  )
}