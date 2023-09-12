import { Link } from "react-router-dom";
import "../../assets/styles/components/_buttons.scss"


function GreenButton({ children, btnLink }) {
  return <Link className="btn" to={btnLink}>{children}</Link>;
}

export default GreenButton;
