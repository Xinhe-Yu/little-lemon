import Section from "./layout/MainSection";
import img from "../assets/restaurantfood.jpg";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import { useFormData } from "./provider/FormDataProvider";
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
  paddingBottom: "120%",
  width: "100%",
  borderRadius: "0.5rem",
}
const CallToAction = () => {
  const { setFormData, initialValues } = useFormData();
  const handleClick = () => {
    setFormData(initialValues);
  };
  return (
    <Section className="bg-pr">
      <div style={{ display: "flex", justifyContent: "space-between" }} className="one">
        <div className="half txt-light" style={{ maxWidth: "24rem" }}>
          <h1 className="txt-pr">{title}</h1>
          <h2>{location}</h2>
          <h3>{description}</h3>
          <Link to="/booking" onClick={handleClick}>
            <Button backgroundColor="#ee9972">Reserve a table</Button></Link>
        </div>
        <div className="landingImg" style={imgBoxStyle}>
          <div style={restaurantImageStyle}></div>
        </div>
      </div>
    </Section>
  )
}
export default CallToAction