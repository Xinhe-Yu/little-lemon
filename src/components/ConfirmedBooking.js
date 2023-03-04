import Section from "./layout/MainSection";
import img from "../assets/restaurant.jpg";
const ConfirmedBooking = (formData) => {
  console.log(formData);
  return (

    < Section >
      <div>
        <img src={img} alt="Little Lemon Restaurant"></img>
      </div>
      <div>
        <h1>Confirmation</h1>
        <p>{formData.time} what</p>
      </div>
    </Section >
  )
}

export default ConfirmedBooking