import {Link} from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';
import {useLocation} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
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
                  src={logo}
                  alt="Logo Kasa"
                />
              </Link>
            </li>
            <div className="nav-links">
              <li
                style={{
                  textDecoration:
                    location.pathname === '/' ? 'underline' : 'none',
                }}>
                <Link
                  to="/"
                  className="link">
                  Accueil
                </Link>
              </li>
              <li
                style={{
                  textDecoration:
                    location.pathname === '/about' ? 'underline' : 'none',
                }}>
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
