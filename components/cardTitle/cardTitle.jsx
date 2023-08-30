import { Icon } from "@/components";
import css from "./cardTitle.module.scss";

export default function CardTitle({ children }) {
  return (
    <h2 className={` fw-bold text-center mb-4 ${css.cardTitle}`}>{children}</h2>
  );
}
