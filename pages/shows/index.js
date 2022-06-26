import css from './shows.module.scss';
import LoadingGears from '../../components/ui/loadingGears/loadingGears.component';

function ShowsPage() {
  let color;
  return (
    <div className={css.container}>
      <LoadingGears />
      <p className={css.text}> booking shows soon!</p>
    </div>
  );
}

export default ShowsPage;
