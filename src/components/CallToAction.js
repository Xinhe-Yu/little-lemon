import Section from "./layout/MainSection";
import img from "../assets/restaurantfood.jpg";

const title = "Little Lemon";
const location = "Chicago";
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const imgBoxStyle = {
  display: "block",
  position: "relative",
  maxWidth: "24rem"
}

const restaurantImageStyle = {
  position: "absolute",
  margin: "auto",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  paddingBottom: "100%",
  width: "100%",
}
const CallToAction = () => {
  return (
    <Section className="bg-pr">
      <div className="half txt-light" style={{ maxWidth: "24rem" }}>
        <h1 className="txt-pr">{title}</h1>
        <h2>{location}</h2>
        <h3>{description}</h3>
      </div>
      <div className="half" style={imgBoxStyle}>
        <div style={restaurantImageStyle} className="what"></div>
      </div>
    </Section >
  )
}
export default CallToAction