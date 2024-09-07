import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import React from 'react';

type PersonalInfoProps = {
  personalData: { name: string; email: string; phone: string; location: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({personalData, onChange}) => {
 return (
  <>
  <FormControl>
    <FormLabel>Full name</FormLabel>
    <Input name="name" placeholder="Enter full name" value={personalData.name} onChange={onChange}/>
  </FormControl>

  <FormControl>
    <FormLabel>Email</FormLabel>
    <Input name="email" placeholder="Enter email" value={personalData.email} onChange={onChange}/>
  </FormControl>

  <FormControl>
    <FormLabel>Phone</FormLabel>
    <Input name="phone" placeholder="Enter phone number" value={personalData.phone} onChange={onChange}/>
  </FormControl>

  <FormControl>
    <FormLabel>Location</FormLabel>
    <Input name="location" placeholder="City, country" value={personalData.location} onChange={onChange}/>
  </FormControl>

</>
 )
}