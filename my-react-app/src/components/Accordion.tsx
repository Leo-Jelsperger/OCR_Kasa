import {ReactNode, useState} from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Accordion({title, children}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const isArray = Array.isArray(children);

  return (
    <div>
      <div
        className="accordion"
        onClick={toggle}
        style={{cursor: 'pointer'}}>
        <h2 className="accordion-title">{title}</h2>
        <div className={`chevron ${isOpen ? 'rotate' : ''}`}>
          <i
            className={`fa-solid fa-chevron-up`}
            aria-hidden="true"></i>
        </div>
      </div>

      <div className={`accordion-text ${isOpen ? 'open' : ''}`}>
        {typeof children === 'string' ? (
          children
        ) : Array.isArray(children) ? (
          <ul>
            {children.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
