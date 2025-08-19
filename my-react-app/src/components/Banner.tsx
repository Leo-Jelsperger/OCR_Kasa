import {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
  img: string;
}

export default function Banner({children, img}: Props) {
  return (
    <>
      <div
        id="banner"
        style={{backgroundImage: `url(${img})`}}>
        <h1>{children}</h1>
      </div>
    </>
  );
}
