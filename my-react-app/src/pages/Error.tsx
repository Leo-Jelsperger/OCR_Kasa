import {Link} from 'react-router-dom';

export default function Error() {
  return (
    <>
      <h1 id="error-title">404</h1>
      <h2 id="error-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
      <Link
        to="/"
        className="link">
        <p id="error-link">Retourner sur la page d'accueil</p>
      </Link>
    </>
  );
}
