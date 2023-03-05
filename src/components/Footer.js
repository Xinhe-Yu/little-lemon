import Nav, { Contacts, Socials } from "./Nav"


const Footer = () => {
  return (
    <footer>
      <nav>
        <h6>Navigation</h6>
        <Nav className="lead-t" />
      </nav>
      <div>
        <h6>Contact</h6>
        <Contacts className="lead-t" />
      </div>
      <div>
        <h6>Social Media Link</h6>
        <Socials className="lead-t" />
      </div>
    </footer>
  )
}

export default Footer