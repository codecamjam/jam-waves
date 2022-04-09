import css from './book-button.module.scss';

function BookButton() {
  return (
    <a
      href="mailto:toysfromtaiwan@gmail.com"
      target="_blank"
      className={[css.btn, css['btn--hero'], css['btn--animated']].join(' ')}
      rel="noreferrer"
    >
      <div className={css['bio-btn__content']}>
        <span>Book Now!</span>
      </div>
    </a>
  );
}

export default BookButton;
