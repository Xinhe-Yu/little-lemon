import Nav from "./Nav"
import logo from "../assets/Logo.svg"




const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon's Logo" height={48} />
        <nav className="card-t">
          <Nav />
        </nav>
      </header>
    </>
  )
}

export default Header