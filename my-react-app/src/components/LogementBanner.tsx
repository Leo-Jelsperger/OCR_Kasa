interface Props {
  src: string;
  title: string;
}

export default function LogementBanner({src, title}: Props) {
  return (
    <img
      id="logement-banner"
      src={src}
      alt={`Photo du logement : ${title}`}
    />
  );
}
