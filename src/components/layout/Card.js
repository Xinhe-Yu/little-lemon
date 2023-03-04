
const imgStyle = {
  objectFit: "cover",
  height: "90%",
  borderRadius: "0.5rem",
}

const cardStyle = {
  borderRadius: "0.5rem",
  backgroundColor: "#edefee",
  margin: "1rem",
  display: "grid",
  gridTemplateRows: "24vmin 1fr 1rem"
}

const cardContentStyle = {
  padding: "0.5rem",
}

const Card = ({ title, price, description, imageSrc }) => {
  return (
    <div className="one-third" style={cardStyle}>
      <img
        className="one"
        src={imageSrc}
        alt={title}
        style={imgStyle} />
      <div style={cardContentStyle}>
        <p><span style={{ color: "#ee9972", float: "right", top: "-1rem" }}>{price}</span></p>
        <h6>{title}</h6>
        <p style={{ padding: "1rem 0" }}>{description}</p>
      </div>
      <h3 style={{ padding: "1rem", alignSelf: "end" }}>Order a delivry</h3>
    </div>
  )
}

export default Card