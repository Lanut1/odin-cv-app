type DemoCVProps = {
  personalData: { name: string; email: string; phone: string; location: string };
}

export const DemoCV: React.FC<DemoCVProps> = ({personalData}) => {
  return (
    <header style={{ backgroundColor:'red'}}>
      <div className="personal-info-name">{personalData.name}</div>
      <div className="personal-info-email">{personalData.email}</div>
      <div className="personal-info-phone">{personalData.phone}</div>
      <div className="personal-info-location">{personalData.location}</div>
    </header>
  )
}