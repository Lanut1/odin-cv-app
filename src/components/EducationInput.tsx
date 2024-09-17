import { Button, Checkbox, FormControl, FormLabel, Input } from "@mui/joy"
import { EducationInputProps } from "../helpers/types"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControlLabel } from "@mui/material";

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
        <FormLabel>School</FormLabel>
        <Input
          name="school"
          placeholder="Enter school/university name"
          value={educationInputData.school}
          onChange={onChange}
          />
      </FormControl>
      <FormControl>
        <FormLabel>Degree</FormLabel>
        <Input
          name="degree"
          placeholder="Enter your degree"
          value={educationInputData.degree}
          onChange={onChange}
          />
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={'Start date'}
          views={['month', 'year']}
          name="startDate"
          value={educationInputData.startDate}
          onChange={(date) => handleDateChange(date, 'startDate')}
          />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={'End date'}
          views={['month', 'year']}
          name="endDate"
          value={educationInputData.endDate}
          onChange={(date) => handleDateChange(date, 'endDate')}
          />
      </LocalizationProvider>
      <FormControlLabel
        control={
          <Checkbox
            checked={isPresent}
            onChange={handlePresentChange}
            name="isPresent"
          />
        }
        label="Present"
      />
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          placeholder="Enter full name"
          value={educationInputData.location}
          onChange={onChange}
          />
      </FormControl>
      <Button onClick={cancelAddingEducation}>Cancel</Button>
      <Button onClick={addEducation}>Add</Button>
    </>

  )
}