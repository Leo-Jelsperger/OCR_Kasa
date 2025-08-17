import {useEffect} from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'À propos';
  }, []);
  return (
    <>
      <div>
        <h1>About</h1>
      </div>
    </>
  );
}
