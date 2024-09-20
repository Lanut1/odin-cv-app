import { Button, Checkbox, FormControl, FormLabel, Input } from "@mui/joy";

import { EducationInputProps } from "../helpers/types";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { FormControlLabel} from "@mui/material";

import { CV_FORM } from "../helpers/constants";

export const EducationInput: React.FC<EducationInputProps> = ({
  educationInputData,
  onChange,
  cancelAddingEducation,
  handleDateChange,
  addEducation,
  isPresent,
  handlePresentChange
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>{CV_FORM.SCHOOL}</FormLabel>
        <Input
          name="school"
          placeholder={CV_FORM.SCHOOL_PLACEHOLDER}
          value={educationInputData.school}
          onChange={onChange}
          />
      </FormControl>
      <FormControl>
        <FormLabel>{CV_FORM.DEGREE}</FormLabel>
        <Input
          name="degree"
          placeholder={CV_FORM.DEGREE_PLACEHOLDER}
          value={educationInputData.degree}
          onChange={onChange}
          />
      </FormControl>
      <div className="cv-form__date-picker">
        <div className="cv-form__date-picker-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={CV_FORM.START_DATE}
              views={['month', 'year']}
              name="startDate"
              value={educationInputData.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={CV_FORM.END_DATE}
              views={['month', 'year']}
              name="endDate"
              value={educationInputData.endDate}
              onChange={(date) => handleDateChange(date, 'endDate')}
              />
          </LocalizationProvider>
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={isPresent}
              onChange={handlePresentChange}
              name="isPresent"
            />
          }
          label={CV_FORM.PRESENT}
        />
      </div>
      <FormControl>
        <FormLabel>{CV_FORM.LOCATION}</FormLabel>
        <Input
          name="location"
          placeholder={CV_FORM.LOCATION_PLACEHOLDER}
          value={educationInputData.location}
          onChange={onChange}
          />
      </FormControl>
      <div className="cv-form__buttons-container">
        <Button onClick={cancelAddingEducation} color="danger" className="button--default">{CV_FORM.CANCEL}</Button>
        <Button onClick={addEducation} className="button--default">{CV_FORM.ADD}</Button>
      </div>
    </>

  )
}