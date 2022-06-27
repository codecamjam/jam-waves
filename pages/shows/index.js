import css from './shows.module.scss';
import LoadingGears from '../../components/ui/loadingGears/loadingGears.component';

function ShowsPage() {
  let color;
  return (
    <div className={css.container}>
      <div className={css.gears}>
        <LoadingGears />
      </div>

      <p className={css.text__small}> booking shows soon!</p>
      <p className={css.text__big}>{`I'm`} booking shows soon!</p>
    </div>
  );
}

export default ShowsPage;
