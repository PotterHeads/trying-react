import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <header className={classes.logo}>
        Hello
        <nav>
          <ul>
            <li>
              <Link to="/"> All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
            <li>
              <Link to="favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
      </header>
    </header>
  );
}

export default Navigation;
