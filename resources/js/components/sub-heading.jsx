const SubHeading = ({ title = "", description = "" }) => {
  return (
    <div className="space-y-0.5">
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

export default SubHeading