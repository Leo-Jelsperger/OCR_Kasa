import {useState} from 'react';

interface Props {
  imgs: string[];
}

export default function Carousel({imgs}: Props) {
  const [current, setCurrent] = useState(0);

  const goToPrev = () =>
    setCurrent(current === 0 ? imgs.length - 1 : current - 1);
  const goToNext = () =>
    setCurrent(current === imgs.length - 1 ? 0 : current + 1);

  return (
    <>
      <div id="carousel">
        <img src={imgs[current]} />
        <button
          id="prev-btn"
          onClick={goToPrev}>
          <i
            style={{transform: 'rotate(270deg)'}}
            className={`fa-solid fa-chevron-up`}
            aria-hidden="true"></i>
        </button>
        <button
          id="next-btn"
          onClick={goToNext}>
          <i
            style={{transform: 'rotate(90deg)'}}
            className={`fa-solid fa-chevron-up`}
            aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
}
