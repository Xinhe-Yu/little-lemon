import Section from "./layout/MainSection";
import { useState, useEffect } from "react";
const cardTitleStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
}

const Card = ({ name, avatar, comment }) => {
  return (
    <div>
      <div style={cardTitleStyle}>
        <h4>{name}</h4>
        <img src={avatar} alt={name} />
      </div>
      <p>{comment}</p>
    </div>
  )
}

const CustomersSay = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=4')
      .then(response => response.json())
      .then(data => setUser(data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const comments = user.map(item => {
    return <Card
      key={item.name.first}
      name={item.name.first}
      avatar={item.picture.medium}
      comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus leo ac lectus placerat consequat."} />
  })


  return (
    <Section className="bg-pr">
      <h1 className="txt-light">Testimonials</h1>
      <div className="comments">{comments}</div>
    </Section>
  )
}
export default CustomersSay