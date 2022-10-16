import css from './shows.module.scss';
import { shows } from '@/utils/shows.util';
import Show from '@/components/ui/show/show';
import LoadingGears from '@/components/ui/loadingGears/loadingGears';

function BookingSoon() {
  return (
    <>
      <div className={css.gears}>
        <LoadingGears />
      </div>
      <p className={css.text__small}> booking shows soon!</p>
      <p className={css.text__big}>{`I'm`} booking shows soon!</p>
    </>
  );
}

function ShowsPage() {
  if (!shows.length) return <BookingSoon />;

  return (
    <div className={css.container}>
      <h4 className={css.heading}>Live Shows!</h4>
      <div className={css.shows}>
        {shows.map(
          ({ venue, website, day, date, time, address, image, alt, maps }) => (
            <div className={css.show} key={venue}>
              <Show
                venue={venue}
                website={website}
                day={day}
                date={date}
                time={time}
                address={address}
                image={image}
                alt={alt}
                maps={maps}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ShowsPage;
