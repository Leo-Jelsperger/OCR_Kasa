interface Props {
  prenom: string;
  nom: string;
  img: string;
}

export default function LogementHost({prenom, nom, img}: Props) {
  return (
    <div id="host">
      <p>
        {prenom} <br /> {nom}
      </p>
      <img
        src={img}
        alt={`Photo de ${prenom} ${nom}`}
      />
    </div>
  );
}
