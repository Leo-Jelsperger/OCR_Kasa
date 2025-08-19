import {useEffect} from 'react';
import Banner from '../components/Banner.tsx';
import LocationGallery from '../components/LocationGallery.tsx';
import logements from '../../location-list.json';
import HomeBanner from '../assets/HomeBanner_img.webp';

export default function Home() {
  useEffect(() => {
    document.title = 'Accueil';
  }, []);

  return (
    <>
      <div id="home-container">
        <Banner img={HomeBanner}>Chez vous, partout et ailleurs</Banner>
        <LocationGallery data={logements} />
      </div>
    </>
  );
}
