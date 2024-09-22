import dayjs from "dayjs";
import { EducationInfo, ExperienceInfo, PersonalData } from "./types";

export const CV_FORM = {
  PERSONAL_INFO: 'Personal Info',
  EDUCATION: 'Education',
  EXPERIENCE: 'Experience',
  CANCEL: 'Cancel',
  ADD: 'Add',
  SCHOOL: 'School',
  SCHOOL_PLACEHOLDER: 'Enter school/university name',
  DEGREE: 'Degree',
  DEGREE_PLACEHOLDER: 'Enter your degree',
  DURATION: 'Duration',
  START_DATE: 'Start date',
  END_DATE: 'End date',
  PRESENT: 'Present',
  LOCATION: 'Location',
  LOCATION_PLACEHOLDER: 'City, country',
  COMPANY_NAME: 'Company Name',
  COMPANY_NAME_PLACEHOLDER: 'Enter company name',
  POSITION: 'Position Title',
  POSITION_PLACEHOLDER: 'Enter your position',
  DESCRIPTION: 'Description',
  DESCRIPTION_PLACEHOLDER: 'Enter job description',
  PDF: 'Get PDF'
}

export const PERSONAL_DATA: PersonalData = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-321-7654',
    location: 'Los Angeles, CA'
}

export const EDUCATION_DATA: EducationInfo[] = [
  {
    id: '1',
    school: 'Stanford University',
    degree: 'Bachelor of Science in Computer Science',
    startDate: dayjs('2014-09-01'),
    endDate: dayjs('2018-06-01'),
    location: 'Stanford, CA'
  },
  {
    id: '2',
    school: 'Massachusetts Institute of Technology (MIT)',
    degree: 'Master of Science in Computer Science',
    startDate: dayjs('2018-09-01'),
    endDate: dayjs('2020-06-01'),
    location: 'Cambridge, MA'
  }
]

export const EXPERIENCE_DATA: ExperienceInfo[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Software Engineer',
    startDate: dayjs('2020-07-01'),
    endDate: dayjs('2022-06-01'),
    location: 'San Francisco, CA',
    description: 'Developed web applications using JavaScript, React, and Node.js. Collaborated with cross-functional teams to deliver scalable solutions.',
  },
  {
    id: '2',
    company: 'Innovative Labs',
    position: 'Frontend Developer',
    startDate: dayjs('2022-07-01'),
    endDate: null,
    location: 'Remote',
    description: 'Focused on creating responsive and interactive user interfaces using React, TypeScript, and Material-UI. Implemented best practices for UI/UX design and code quality.',
  },
  {
    id: '3',
    company: 'Quantum Software Systems',
    position: 'Junior Developer',
    startDate: dayjs('2019-06-01'),
    endDate: dayjs('2020-06-01'),
    location: 'New York, NY',
    description: 'Worked on various web development projects utilizing HTML, CSS, and JavaScript. Assisted senior developers with debugging, testing, and integrating APIs.',
  }
];