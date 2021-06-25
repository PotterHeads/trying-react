import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <header>
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
