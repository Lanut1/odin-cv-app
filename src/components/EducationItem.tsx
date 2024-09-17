import { EducationItemProps } from "../helpers/types";
import { DeleteOutline } from "@mui/icons-material";
import { EditNote } from "@mui/icons-material";
import { Button } from "@mui/joy";

export const EducationItem: React.FC<EducationItemProps> = ({educationItemData, editItem, deleteItem}) => {
  return (
    <div className="education-item">
      <div className="education-item__title">{educationItemData.school}</div>
      <Button onClick={deleteItem}><DeleteOutline/></Button>
      <Button onClick={editItem}><EditNote/></Button>
    </div>
  )
}