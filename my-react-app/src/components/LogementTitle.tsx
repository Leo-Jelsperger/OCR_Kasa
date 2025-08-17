interface Props {
  title: string;
  location: string;
}

export default function LogementTitle({title, location}: Props) {
  return (
    <>
      <div>
        <h1 id="logement-title">{title}</h1>
        <h2 id="logement-location">{location}</h2>
      </div>
    </>
  );
}
