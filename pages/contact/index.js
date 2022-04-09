import Bio from '@/components/sections/bio/bio';
import css from './contact.module.scss';

const ContactPage = () => {
  return (
    <div className={`${css.contact} mt-0 mt-md-1 mt-lg-3`}>
      <div className={css.bio}>
        <Bio />
      </div>
    </div>
  );
};

export default ContactPage;
