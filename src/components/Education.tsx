import React, { useState } from "react";

import { Button } from "@mui/joy";

import { EducationInfo, EducationInfoProps } from "../helpers/types";

import { EducationItem } from "./EducationItem";
import { EducationInput } from "./EducationInput";

import {v4 as uuid} from 'uuid';

import dayjs, { Dayjs } from 'dayjs';

import { LibraryAdd } from "@mui/icons-material";

import { CV_FORM } from "../helpers/constants";

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
  <div className="cv-form__education-info">
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
        <div className="cv-form__education-items">
          {educationData.map((education) =>
          <EducationItem
            key={education.id}
            educationItemData={education}
            editItem={() => openForm(education)}
            deleteItem={()=> deleteEducation(education)}
          />
          )}
        </div>
        <Button className="button--default" onClick={() => openForm()}><LibraryAdd/>{CV_FORM.EDUCATION}</Button>
      </>
    )}
  </div>
  )
}