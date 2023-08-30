import { useRouter } from "next/router";
import css from "./hero.module.scss";

export default function Hero() {
  const router = useRouter();

  if (router.pathname === "/support") return null;

  return (
    <div className="mx-auto">
      <h1 className={` ${css.hero} font-zilla-slab-highlight`}>
        TOYS FROM TAIWAN
      </h1>
    </div>
  );
}
