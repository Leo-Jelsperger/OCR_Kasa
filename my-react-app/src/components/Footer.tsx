import logo from '../assets/logo_kasa_black.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <img
          src={logo}
          alt="Logo Kasa"
          width={122}
          height={40}
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}
