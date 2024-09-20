import { EducationItemProps } from "../helpers/types";

import { DeleteOutline, EditNote } from "@mui/icons-material";

import { Button } from "@mui/joy";

export const EducationItem: React.FC<EducationItemProps> = ({educationItemData, editItem, deleteItem}) => {
  return (
    <div className="cv-form__education-item">
      <div className="cv-form__education-item__title">{educationItemData.school}</div>
      <div className="cv-form__education-item__buttons-container">
        <Button onClick={() => deleteItem(educationItemData)}><DeleteOutline/></Button>
        <Button onClick={() => editItem(educationItemData)}><EditNote/></Button>
      </div>
    </div>
  )
}