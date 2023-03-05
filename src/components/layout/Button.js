import { useState } from "react"

const Button = ({ style, children, clickHandler, backgroundColor, isValid }) => {
  const [NotOnHover, setOnHover] = useState("true");
  const validation = isValid == null ? true : isValid;
  const bgColor = backgroundColor ? backgroundColor : "#495e57";
  const btnStyle = {
    backgroundColor: !validation ? "#636363" :
      NotOnHover ? "#f4ce14" : bgColor,
    color: !validation ? "#bbbbbb" :
      NotOnHover ? "#333333" : "#edefee",
    borderRadius: "0.5rem",
    borderWidth: 0,
    padding: "0.5rem",
    height: "2.45rem",
    width: "fit-content",
    display: "inline-block",
    textAlign: "center",
    border: "none",
    cursor: !validation ? "not-allowed" : "pointer",
  };

  return (
    <button
      onMouseEnter={() => setOnHover(false)}
      onMouseLeave={() => setOnHover(true)}
      className="sec-t"
      style={{ ...btnStyle, ...style }}
      onClick={clickHandler}
      disabled={validation ? 0 : 1}
      aria-label="On Click"
    >
      {children}
    </button>
  )
}

export default Button