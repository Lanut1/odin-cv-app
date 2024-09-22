import { PersonalDemoProps } from "../helpers/types";

import { LocationCity, Mail, Phone } from "@mui/icons-material";

export const PersonalDemo: React.FC<PersonalDemoProps> = ({personalData}) => {
  return (
    <div className="personal-info">
    <div className="personal-info__name">{personalData.name}</div>
    <div className="personal-info__email"><Mail/>{personalData.email}</div>
    <div className="personal-info__phone-location__container">
      <div className="personal-info__phone"><Phone/>{personalData.phone}</div>
      <div className="personal-info__location"><LocationCity/>{personalData.location}</div>
    </div>
  </div>
  )
}