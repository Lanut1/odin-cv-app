import { Button } from "@mui/joy";
import { EducationInfo, EducationInfoProps } from "../helpers/types";
import { EducationItem } from "./EducationItem";
import React, { useState } from "react";
import { EducationInput } from "./EducationInput";
import {v4 as uuid} from 'uuid';
import dayjs, { Dayjs } from 'dayjs';

export const Education: React.FC<EducationInfoProps> = ({educationData, updateEducation, deleteEducation}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEducationData, setCurrentEducationData] = useState<EducationInfo>({
    id: '',
    school: '',
    degree: '',
    startDate: null,
    endDate: null,
    location: ''
  });

  const [isPresent, setIsPresent] = useState(!!(!currentEducationData.endDate && currentEducationData.startDate));


  const openForm = (educationToEdit?: EducationInfo) => {
    if (educationToEdit) {
      setCurrentEducationData(educationToEdit);
    }

    setIsEditing(true);
  }

  const handleEducationInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentEducationData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleDateChange = (date: Dayjs | null, dateType: 'startDate' | 'endDate') => {
    setCurrentEducationData(prevData => ({
      ...prevData,
      [dateType]: date
    }));
  };

  const handlePresentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPresent(event.target.checked);
    if (event.target.checked) {
      setCurrentEducationData(prevData => ({
        ...prevData,
        endDate: null
      }));
    }
  }

  const cancelAddingEducation = () => {
    setIsEditing(false);
    setCurrentEducationData({
      id: '',
      school: '',
      degree: '',
      startDate: null,
      endDate: null,
      location: ''
    })
    setIsPresent(false);
  }

  const handleEducationUpdate = () => {
    const educationToUpdate = {
      ...currentEducationData,
      id: currentEducationData.id || uuid()
    }
    updateEducation(educationToUpdate);
    cancelAddingEducation();
  }

  return (
  <>
    {isEditing ? (
      <>
        <EducationInput
          educationInputData={currentEducationData}
          onChange={handleEducationInputChange}
          handleDateChange={handleDateChange}
          cancelAddingEducation={cancelAddingEducation}
          addEducation={handleEducationUpdate}
          isPresent={isPresent}
          handlePresentChange={handlePresentChange}
          />
      </>
    )
    : (
      <>
        <div className="education-items">
          {educationData.map((education) =>
          <EducationItem
            key={education.id}
            educationItemData={education}
            editItem={() => openForm(education)}
            deleteItem={()=> deleteEducation(education)}
          />
          )}
        </div>
        <Button onClick={() => openForm()}>Add education</Button>
      </>
    )}
  </>
  )
}