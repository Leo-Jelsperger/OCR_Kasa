import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export default function HomeBanner({children}: Props) {
  return (
    <>
      <div id="home-banner">
        <h1>{children}</h1>
      </div>
    </>
  );
}
