import {useEffect} from 'react';
import './Home.scss';
import HomeBanner from '../components/HomeBanner.tsx';
import LocationGallery from '../components/LocationGallery.tsx';
import logements from '../../location-list.json';

export default function Home() {
  useEffect(() => {
    document.title = 'Accueil';
  }, []);

  return (
    <>
      <div id="home-container">
        <HomeBanner>Chez vous, partout et ailleurs</HomeBanner>
        <LocationGallery data={logements} />
      </div>
    </>
  );
}
