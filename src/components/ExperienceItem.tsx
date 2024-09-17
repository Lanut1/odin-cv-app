import { Button } from "@mui/joy";
import { ExperienceItemProps } from "../helpers/types";
import { DeleteOutline, EditNote } from "@mui/icons-material";

export const ExperienceItem: React.FC<ExperienceItemProps> = ({experienceItemData, deleteItem, editItem}) => {
  return (
    <div className="experience-item">
      <div className="experience-item__title">{experienceItemData.company}</div>
      <Button onClick={() => deleteItem(experienceItemData)}><DeleteOutline/></Button>
      <Button onClick={() => editItem(experienceItemData)}><EditNote/></Button>
    </div>
  )
}