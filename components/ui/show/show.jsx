/* eslint-disable @next/next/no-img-element */
import css from './show.module.scss';
import Image from 'next/image';
function Show({ venue, website, day, date, time, address, image, alt, maps }) {
  const formatAddr = address.split('!');
  return (
    <div className="d-flex flex-column align-items-center">
      <a href={website} title={venue} target="_blank" rel="noreferrer">
        <img src={image} alt={alt} className={css.flyer} />
      </a>
      <a
        href={maps}
        title={'Directions to ' + venue}
        target="_blank"
        rel="noreferrer"
        className={css.address}
      >
        {formatAddr.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </a>
    </div>
  );
}

export default Show;
