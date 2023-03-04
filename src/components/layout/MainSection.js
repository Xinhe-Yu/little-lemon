const containerStyle = {
  maxWidth: "864px",
  padding: "2rem",
  margin: "auto",
  marginLeft: "0 !important",
  marginRight: "0 !important",
  justifyContent: "space-between",
};

const Section = ({ children, className, ...props }) => {
  return (
    <section className={className}>
      <div className="container" style={{ ...containerStyle, ...props.style }}>
        {children}
      </div>
    </section>
  )
}
export default Section