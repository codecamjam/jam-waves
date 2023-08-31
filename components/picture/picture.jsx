/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@/context";
import css from "./picture.module.scss";

export default function Picture({ img, alt }) {
  const { darkMode } = useAppContext();

  const imgSrc = `/images/${img}`;

  const imgStyle = {
    maxWidth: "100%", // Set maximum width to 100% of container
    height: "auto", // Allow automatic height calculation
    ...(darkMode ? { filter: "invert(100%)" } : {}),
  };

  return (
    <div className={css.container}>
      <img
        src={imgSrc}
        alt={alt}
        style={imgStyle}
        className={css.picture} // Apply any additional styles here
        width={850}
        height={503}
      />
    </div>
  );
}
