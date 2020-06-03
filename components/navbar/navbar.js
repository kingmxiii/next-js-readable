import Link from "next/link";
const navbar = () => (
  <nav className="navbar navbar-dark bg-dark shadow-sm">
    <Link href="/">
      <a
        data-test="app-logo"
        className="navbar-brand d-flex align-items-center"
      >
        <strong>My Reads</strong>
      </a>
    </Link>
    <ul className="navbar-nav mr-auto">
      <li>
        <Link href="/">
          <a data-test="home-link" className="nav-item">
            Home
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default navbar;
