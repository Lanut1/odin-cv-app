import { Button, FormControl, FormLabel, Input } from "@mui/joy";

import { Checkbox, FormControlLabel } from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { ExperienceInputProps } from "../helpers/types";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CV_FORM } from "../helpers/constants";

export const ExperienceInput: React.FC<ExperienceInputProps> = ({
  experienceInputData,
  handleDateChange,
  onChange,
  cancelAddingExperience,
  addExperience,
  isPresent,
  handlePresentChange
}) => {
  return (
  <>
    <FormControl>
      <FormLabel>{CV_FORM.COMPANY_NAME}</FormLabel>
      <Input
        name="company"
        placeholder={CV_FORM.COMPANY_NAME_PLACEHOLDER}
        value={experienceInputData.company}
        onChange={onChange}
        />
    </FormControl>
    <FormControl>
      <FormLabel>{CV_FORM.POSITION}</FormLabel>
      <Input
        name="position"
        placeholder={CV_FORM.POSITION_PLACEHOLDER}
        value={experienceInputData.position}
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
              value={experienceInputData.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={CV_FORM.END_DATE}
              views={['month', 'year']}
              name="endDate"
              value={experienceInputData.endDate}
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
        value={experienceInputData.location}
        onChange={onChange}
        />
    </FormControl>
    <FormControl>
      <FormLabel>{CV_FORM.DESCRIPTION}</FormLabel>
      <Input
        name="description"
        placeholder={CV_FORM.DESCRIPTION_PLACEHOLDER}
        value={experienceInputData.description}
        onChange={onChange}
        />
    </FormControl>
    <div className="cv-form__buttons-container">
      <Button onClick={cancelAddingExperience} color="danger" className="button--default">{CV_FORM.CANCEL}</Button>
      <Button onClick={addExperience} className="button--default">{CV_FORM.ADD}</Button>
    </div>
  </>
)
}