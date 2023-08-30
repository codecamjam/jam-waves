import { Picture, JamInChinese, LandingWords } from "@/components";

export default function HomePage() {
  return (
    <>
      <Picture
        img="instruments.jpg"
        alt="cartoon drawing of instruments"
        w={850}
        h={503}
      />

      <JamInChinese />
      <LandingWords position="bottom" />
    </>
  );
}
