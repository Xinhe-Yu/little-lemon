import Section from "./layout/MainSection";
import Button from "./layout/Button";
import Card from "./layout/Card";
import img1 from "../assets/greek_salad.jpg";
import img2 from "../assets/bruchetta.svg";
import img3 from "../assets/lemon_dessert.jpg";

const specials = [
  {
    id: "1",
    title: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta chesse, garnished with crunchy garlic adn rosemary croutons.",
    price: "$12.99",
    photo: img1,
  },
  {
    id: "2",
    title: "Bruchetta",
    description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    photo: img2,
  },
  {
    id: "3",
    title: "Lemon Dessert",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    photo: img3,
  },
]


const HomePage = () => {
  const specialListitems = specials.map(item => {
    return (
      <Card
        title={item.title}
        price={item.price}
        description={item.description}
        imageSrc={item.photo}
        key={item.id}
      />)
  })

  return (
    <Section className="bg-white" containerName={"top-bottom special"}>
      <div>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </div>
      <div>
        {specialListitems}
      </div>
    </Section>
  )
}
export default HomePage