import React from "react";
import dayjs, { Dayjs } from 'dayjs';

export type DemoCVProps = {
  personalData: PersonalData;
  educationData: EducationInfo[];
  experienceData: ExperienceInfo[];
}

export type PersonalData = {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export type PersonalInfoProps = {
  personalData: PersonalData;
  onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export type EducationInfo = {
  id: string;
  school: string;
  degree: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  location: string;
};

export type EducationInfoProps = {
  educationData: EducationInfo[];
  updateEducation: (newEducation: EducationInfo) => void;
  deleteEducation: (educationToDelete: EducationInfo) => void;
}

export type EducationItemProps = {
  educationItemData: EducationInfo;
  editItem: (educationToEdit: EducationInfo) => void;
  deleteItem: (educationToDelete: EducationInfo) => void;
}

export type EducationInputProps = {
  educationInputData: EducationInfo;
  handleDateChange: (date: Dayjs | null, dateType: 'startDate' | 'endDate') => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cancelAddingEducation: () => void;
  addEducation: () => void;
  isPresent: boolean;
  handlePresentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ExperienceInfo = {
  id: string;
  company: string;
  position: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  location: string;
  description: string;
}

export type ExperienceInfoProps = {
  experienceData: ExperienceInfo[];
  updateExperience: (newExperience: ExperienceInfo) => void;
  deleteExperience: (experienceToDelete: ExperienceInfo) => void;
}

export type ExperienceInputProps = {
  experienceInputData: ExperienceInfo;
  handleDateChange: (date: Dayjs | null, dateType: 'startDate' | 'endDate') => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cancelAddingExperience: () => void;
  addExperience: () => void;
  isPresent: boolean;
  handlePresentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ExperienceItemProps = {
  experienceItemData: ExperienceInfo;
  editItem: (experienceToEdit: ExperienceInfo) => void;
  deleteItem: (experienceToDelete: ExperienceInfo) => void;
}

export type PersonalDemoProps = {
  personalData: PersonalData;
}

export type EducationDemoProps = {
  educationData: EducationInfo[];
}

export type ExperienceDemoProps = {
  experienceData: ExperienceInfo[];
}