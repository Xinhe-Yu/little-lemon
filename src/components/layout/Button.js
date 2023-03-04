import { useState } from "react"

const Button = ({ style, children, clickHandler, backgroundColor }) => {
  const [NotOnHover, setOnHover] = useState("true");
  const bgColor = backgroundColor ? backgroundColor : "#495e57";
  const btnStyle = {
    backgroundColor: NotOnHover ? "#f4ce14" : bgColor,
    color: NotOnHover ? "#333333" : "#edefee",
    borderRadius: "0.5rem",
    borderWidth: 0,
    padding: "0.5rem",
    height: "2.45rem",
    width: "fit-content",
    display: "inline-block",
    textAlign: "center",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button
      onMouseEnter={() => setOnHover(false)}
      onMouseLeave={() => setOnHover(true)}
      className="sec-t"
      style={{ ...btnStyle, ...style }}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button