import Image from "next/image";
import { useAppContext } from "@/context";
import css from "./picture.module.scss";

export default function Picture({ img, alt, w, h }) {
  const { darkMode } = useAppContext();
  return (
    <div className={css.container}>
      <Image
        src={`/images/${img}`}
        alt={alt}
        width={w}
        height={h}
        style={darkMode ? { filter: "invert(100%)" } : null}
      />
    </div>
  );
}
