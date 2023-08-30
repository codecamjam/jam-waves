import React from "react";
import { Card, Container } from "react-bootstrap";
import css from "./aboutInfo.module.scss";

export default function AboutInfo() {
  return (
    <Container className={`my-3 px-0 mx-0 ${css.aboutInfo}`}>
      <Card className="p-4">
        <h2 className="mb-4">Toys From Taiwan - Live Looping Jams</h2>
        <p>
          {`Hi, I'm JAM 果酱, and these are my Toys From Taiwan. Thanks for stopping by! Here's a little bit about what you'll find on
          this site:`}
        </p>
        <h3>About Me</h3>
        <p>
          {`I specialize in creating 100% live looping instrumental jams. Every
          beat, melody, and rhythm you hear is crafted in real time, with no
          backing tracks or pre-recorded elements. I rely on loop machines,
          effects pedals, guitars, basses, keyboards, and synths to create my unique sound. My
          passion for music and my gear, much of which bears the "Made in
          Taiwan" label, inspired the name "Toys From Taiwan."`}
        </p>
        <h3>The Music</h3>
        <p>
          {`Experience deep relaxation as I take you on a live looping journey
          through dynamic and spontaneous jams. Each session is an exploration
          of sound, rhythm, and melody, brought to life before your ears. I'm looking forward to playing for you soon!`}
        </p>
        {/* <h3>The Website</h3>
        <p>
          {`This website was built from the ground up using Next.js, a powerful
          React framework. While it's currently a static site, I have big plans
          for its future:`}
        </p>
        <ul>
          <li>
            {`I'll be upgrading to the latest version of Next.js to leverage its
            advanced features.`}
          </li>
          <li>
            {`I'll be incorporating TypeScript for enhanced code quality and
            maintainability.`}
          </li>
          <li>
            {`I'm working on connecting the site to my personal backend services,
            enhancing the user experience and offering more interactive
            features.`}
          </li>
        </ul>
        <p>
          {`In the meantime, enjoy the current version of the site—it's a snapshot
          of my creative journey. Your visit means a lot to me, and your support
          fuels my passion for creating live looping music.`}
        </p> */}
        <p className={css.thanks}>
          Thank you for stopping by!
          <br />
          -- <span>JAM 果酱</span>
        </p>
      </Card>
    </Container>
  );
}
