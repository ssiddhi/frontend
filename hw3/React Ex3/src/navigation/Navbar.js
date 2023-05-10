import { Route, Link } from "react-router-dom";

// import views
import Search from "./../views/Search";
import Home from "./../views/Home";
import Houses from "./../views/Houses";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/search">Search</Link>
          </li>
          <li className="nav-link">
            <Link to="/houses">Houses</Link>
          </li>
        </ul>
      </nav>

      <Route path="/">
        <Home title="Welcome to our application!" />
      </Route>
      <Route path="/search">
        <Search title="List of Books" />
      </Route>
      <Route path="/houses">
        <Houses title="Number of Pages Per Book" />
      </Route>
    </div>
  );
}

export default Navbar;
