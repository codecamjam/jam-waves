import { Bio } from '@/components';
import css from './contact.module.scss';

export default function ContactPage() {
  return (
    <div className={`${css.contact} mt-0 mt-md-1 mt-lg-5`}>
      <div className={css.bio}>
        <Bio />
      </div>
    </div>
  );
};
