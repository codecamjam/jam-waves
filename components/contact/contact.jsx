import { Icon } from '@/components';
import css from './contact.module.scss';

export default function Contact() {
  return (
    <div className={css.contact}>
      <h4 className={css.heading}>Get in touch</h4>
      <div className={css.row}>
        <Icon spriteName="icon-eye" />
        <div className={css.text}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cameron-taghlabi-33b69518a/"
            className={css.value}
            rel="noreferrer"
          >
            <span className={css.name} title="LinkedIn">
              Jam Waves 果酱
            </span>
          </a>
        </div>
      </div>
      <div className={css.row} title="Email">
        <Icon spriteName="icon-envelop" />
        <div className={css.text}>
          <a
            target="_blank"
            href="mailto:toysfromtaiwan@gmail.com"
            className={css.value}
            rel="noreferrer"
          >
            ToysFromTaiwan@gmail.com
          </a>
        </div>
      </div>
      <div className={css.row} title="Phone number">
        <Icon spriteName="icon-phone" />
        <div className={css.text}>
          <a
            target="_blank"
            className={css.value}
            href="tel:9045633433"
            rel="noreferrer"
          >
            (904) 563-3433
          </a>
        </div>
      </div>
    </div>
  );
}
