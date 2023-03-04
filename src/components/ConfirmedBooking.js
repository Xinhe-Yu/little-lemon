import Section from "./layout/MainSection";
import img from "../assets/restaurant.jpg";
const ConfirmedBooking = (formData, isconfirmed) => {
  return (
    <Section>
      <div>
        <img src={img} alt="Little Lemon Restaurant"></img>
      </div>
      <div>
        <h1>Confirmation</h1>
        <></>
      </div>
    </Section>
  )
}

export default ConfirmedBooking