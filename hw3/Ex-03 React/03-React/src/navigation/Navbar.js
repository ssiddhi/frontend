import { Link } from "react-router-dom";

// import views
// import Search from "./../views/Search";
// import Home from "./../views/Home";
// import Houses from "./../views/Houses";

function Navbar() {
  return (
    // <div>
    <nav className="navbar navbar-expand-lg bg-dark">
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/home" className="nav-link text-light fs-4">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link text-light fs-4">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/houses" className="nav-link text-light fs-4">
            Houses
          </Link>
        </li>
      </ul>
    </nav>

    //   <Route path="/">
    //     <Home title="Welcome to our application!" />
    //   </Route>
    //   <Route path="/search">
    //     <Search title="List of Books" />
    //   </Route>
    //   <Route path="/houses">
    //     <Houses title="Number of Pages Per Book" />
    //   </Route>
    // </div>
  );
}

export default Navbar;
