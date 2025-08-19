import {useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import logements from '../../location-list.json';
import LogementBanner from '../components/LogementBanner.tsx';
import LogementTitle from '../components/LogementTitle';
import LogementHost from '../components/LogementHost';
import LogementTags from '../components/LogementTags';
import LogementRating from '../components/LogementRating';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';

export default function Logement() {
  const {id} = useParams<{id: string}>();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return (
      <Navigate
        to="/error"
        replace
      />
    );
  }

  useEffect(() => {
    {
      document.title = `Logement - ${logement.title}`;
    }
  }, []);

  const [prenom, nom] = logement.host.name.split(' ');

  return (
    <>
      <div id="main-container">
        {logement.pictures.length <= 1 ? (
          <LogementBanner
            src={logement.cover}
            title={logement.title}
          />
        ) : (
          <Carousel imgs={logement.pictures} />
        )}
        <div id="logement-content">
          <LogementTitle
            title={logement.title}
            location={logement.location}
          />
          <LogementHost
            prenom={prenom}
            nom={nom}
            img={logement.host.picture}
          />
          <LogementTags tags={logement.tags} />
          <LogementRating rating={logement.rating} />
          <Accordion title="Description">{logement.description}</Accordion>
          <Accordion title="Équipements">{logement.equipments}</Accordion>
        </div>
      </div>
    </>
  );
}
