import { PersonalInfo } from './components/PersonalInfo'
import './App.css'
import { useState } from 'react';
import { DemoCV } from './components/DemoCV';

function App() {
  const [personalData, setPersonalData] = useState({
    name: 'Anna',
    email: '',
    phone: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
    <PersonalInfo personalData={personalData} onChange={(event) => handleInputChange(event)}/>
    <DemoCV personalData={personalData}/>
    </>
  )
}

export default App
