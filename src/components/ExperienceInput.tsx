import { Button, FormControl, FormLabel, Input } from "@mui/joy"
import { Checkbox, FormControlLabel } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { ExperienceInputProps } from "../helpers/types"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
      <FormLabel>Company Name</FormLabel>
      <Input
        name="company"
        placeholder="Enter company name"
        value={experienceInputData.company}
        onChange={onChange}
        />
    </FormControl>
    <FormControl>
      <FormLabel>Position Title</FormLabel>
      <Input
        name="position"
        placeholder="Enter your position"
        value={experienceInputData.position}
        onChange={onChange}
        />
    </FormControl>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={'Start date'}
        views={['month', 'year']}
        name="startDate"
        value={experienceInputData.startDate}
        onChange={(date) => handleDateChange(date, 'startDate')}
        />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={'End date'}
        views={['month', 'year']}
        name="endDate"
        value={experienceInputData.endDate}
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
        placeholder="Enter location"
        value={experienceInputData.location}
        onChange={onChange}
        />
    </FormControl>
    <FormControl>
      <FormLabel>Description</FormLabel>
      <Input
        name="description"
        placeholder="Enter job description"
        value={experienceInputData.description}
        onChange={onChange}
        />
    </FormControl>
    <Button onClick={cancelAddingExperience}>Cancel</Button>
    <Button onClick={addExperience}>Add</Button>
  </>
)
}