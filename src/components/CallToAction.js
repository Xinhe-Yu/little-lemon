import Section from "./layout/MainSection";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import img from "../assets/restaurantfood.jpg";
import { useFormData } from "./provider/FormDataProvider";
const title = "Little Lemon";
const location = "Chicago";
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const CallToAction = () => {
  const { setFormData, initialValues } = useFormData();
  const handleClick = () => {
    setFormData(initialValues);
  };
  return (
    <Section className="bg-pr" containerName={"left-right"}>
      <div className="txt-light" style={{ maxWidth: "24rem" }}>
        <h1 className="txt-pr">{title}</h1>
        <h2>{location}</h2>
        <h3>{description}</h3>
        <Link to="/booking" onClick={handleClick}>
          <Button backgroundColor="#ee9972">Reserve a table</Button></Link>
      </div>
      <div className="landingImg" /* style={imgBoxStyle} */>
        <img src={img} alt="Little Lemon Restaurant"></img>
      </div>
    </Section>
  )
}
export default CallToAction