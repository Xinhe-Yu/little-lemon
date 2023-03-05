import Section from "./layout/MainSection";
import img from "../assets/restaurant.jpg";
import { useFormData } from "./provider/FormDataProvider";

const ConfirmedBooking = () => {
  const { formData } = useFormData();
  return (
    <Section containerName={"left-right confirmation"}>
      <div>
        <img src={img} alt="Little Lemon Restaurant"></img>
      </div>
      <div>
        <h1>Confirmation</h1>
        <p>{formData.date} {formData.time} </p>
        <p>Dinner at Littler Lemon</p>
        <p>{formData.number} person</p>
        <p>
          {formData.occasion ? `Happy ${formData.occasion}! and t` : `T`}hanks for your reservation! </p>
      </div>
    </Section>
  )
};

export default ConfirmedBooking;