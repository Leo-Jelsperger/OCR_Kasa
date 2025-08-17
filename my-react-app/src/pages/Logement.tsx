import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import logements from '../../location-list.json';
import './Logement.scss';
import LogementBanner from '../components/LogementBanner';
import LogementTitle from '../components/LogementTitle';
import LogementHost from '../components/LogementHost';
import LogementTags from '../components/LogementTags';
import LogementRating from '../components/LogementRating';
import Accordion from '../components/Accordion';

export default function Logement() {
  const {id} = useParams<{id: string}>();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <div id="error-msg">Logement non trouvé</div>;
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
        <LogementBanner
          src={logement.cover}
          title={logement.title}
        />
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
      <script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </script>
    </>
  );
}
