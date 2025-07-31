import {useEffect} from 'react';

export default function Logement() {
  useEffect(() => {
    document.title = 'Logements';
  }, []);

  return (
    <>
      <h1>Logements</h1>
    </>
  );
}
