const navItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Menu" },
  { id: 4, title: "Reservations" },
  { id: 5, title: "Order Online" },
  { id: 6, title: "Login" }
];

const contacts = [
  { id: 1, title: "Adress", link: "#" },
  { id: 2, title: "Phone Number", link: "#" },
  { id: 3, title: "Email", link: "mailto:littlelemon@gmail.com" },
];

const socials = [
  { id: 1, title: "facebook" },
  { id: 2, title: "Instagram" },
  { id: 3, title: "Twitter" }
]

/* const createListItems = (data) => {
  const listItems = data.map(item => {
    return <li key={item.id}><a href={item.link ? item.link : "/#"}>{item.title}</a></li>
  });
  return listItems;
}; */

const createListItems = (data) => {
  return data.map(item =>
  (<li key={item.id}>
    <a href={item.link ? item.link : "/#"}>
      {item.title}
    </a>
  </li>));
};

const Nav = (props) => {
  const navListItems = createListItems(navItems);
  return (
    <ul className={props.className} >
      {navListItems}
    </ul>
  )
}

const Contacts = (props) => {
  const contactListItems = createListItems(contacts);
  return (
    <ul className={props.className} >
      {contactListItems}
    </ul>
  )
}

const Socials = (props) => {
  const socialListItems = createListItems(socials);
  return (
    <ul className={props.className} >
      {socialListItems}
    </ul>
  )
}

export { Contacts, Socials };
export default Nav