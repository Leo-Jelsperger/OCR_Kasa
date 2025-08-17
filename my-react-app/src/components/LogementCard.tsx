import {Link} from 'react-router-dom';

interface Host {
  name: string;
  picture: string;
}

interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

interface Props {
  logement: Logement;
  id: string;
}
export default function LogementCard({logement, id}: Props) {
  return (
    <>
      <article
        id="logement-card"
        style={{backgroundImage: `url(${logement.cover})`}}>
        <Link
          to={`/logement/${id}`}
          className="link">
          <h2 className="logement-title">{logement.title}</h2>
        </Link>
      </article>
    </>
  );
}
