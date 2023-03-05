import Section from "./layout/MainSection";
import img1 from "../assets/Mario_and_Adrian_A.jpg";
import img2 from "../assets/Mario_and_Adrian_B.jpg";

const title = "Little Lemon";
const location = "Chicago";
const description = "Quisque eu feugiat nunc. Nunc sit amet arcu gravida, porttitor est in, pulvinar tellus. Maecenas ut mauris eu nulla tempus dapibus. Pellentesque nec tortor justo. Suspendisse sit amet felis dui. Vestibulum ac nibh vestibulum, scelerisque massa at, finibus est. Etiam ornare nunc at sollicitudin posuere. Cras rhoncus turpis magna, sed aliquet ipsum egestas eget.";

const Chicago = () => {
  return (
    <Section containerName={"left-right chicago"}>
      <div style={{ maxWidth: "24rem" }}>
        <h1 className="txt-pr-g">{title}</h1>
        <h2>{location}</h2>
        <h3>{description}</h3>
      </div>
      <div>
        <img src={img1} alt="Mario and Adrian 1" />
        <img src={img2} alt="Mario and Adrian 2" />
      </div>
    </Section>
  )
}
export default Chicago