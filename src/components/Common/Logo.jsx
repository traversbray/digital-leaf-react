import logo from "../../assets/images/digital-leaf-logo-light-v2.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="logo margin-0" src={logo} />
    </Link>
  );
}

export default Logo;
