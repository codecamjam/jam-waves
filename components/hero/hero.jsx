import css from "./hero.module.scss";

export default function hero() {
  return (
    <div className="mx-auto">
      <h1 className={` ${css.hero} font-zilla-slab-highlight`}>
        TOYS FROM TAIWAN
      </h1>
    </div>
  );
}
