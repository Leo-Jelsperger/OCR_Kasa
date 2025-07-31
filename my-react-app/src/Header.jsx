import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className="link">
                <img
                  src="./logo_kasa.svg"
                  alt="Logo Kasa"
                />
              </Link>
            </li>
            <div className="nav-links">
              <li>
                <Link
                  to="/"
                  className="link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="link">
                  À propos
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
