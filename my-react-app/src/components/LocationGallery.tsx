import LogementCard from './LogementCard';

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
  data: Logement[];
}

export default function LocationGallery({data}: Props) {
  return (
    <>
      <div id="location-gallery">
        {data.map((logement) => (
          <LogementCard
            logement={logement}
            key={logement.id}
            id={logement.id}
          />
        ))}
      </div>
    </>
  );
}
