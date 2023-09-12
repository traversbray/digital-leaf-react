import { Link } from "react-router-dom";

function NavLinks({ data }) {
  return (
    <ul id="menu-primary-nav" className="menu list-reset">
      {data.map((link) => (
        <li
          key={link.id}
          id={`menu-item-${link.id}`}
          className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${link.id}`}
        >
          <Link to={link.url}>{link.title.rendered}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
