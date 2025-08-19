interface Props {
  rating: string;
}

export default function LogementRating({rating}: Props) {
  const stars = parseInt(rating);
  return (
    <div id="logement-rating">
      {Array.from({length: 5}, (_, i) => (
        <span
          key={i}
          style={{color: stars > i ? '#ff6060' : '#e3e3e3'}}>
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
}
