const Section = ({ children, className, containerName, ...props }) => {
  const container = "container";
  return (
    <section className={className}>
      <div className={containerName ? containerName + " " + container : container} style={{ ...props.style }}>
        {children}
      </div>
    </section>
  )
}
export default Section