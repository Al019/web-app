const Heading = ({ title = "", description = "" }) => {
  return (
    <div className="space-y-0.5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

export default Heading