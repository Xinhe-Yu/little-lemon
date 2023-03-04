const containerStyle = {
  maxWidth: "864px",
  padding: "2rem",
  margin: "auto",
  display: "flex",
  marginLeft: "0 !important",
  marginRight: "0 !important"
};

const Section = ({ children, className, ...props }) => {
  return (
    <section className={className}>
      <div className="container" style={containerStyle}>
        {children}
      </div>
    </section>
  )
}
export default Section