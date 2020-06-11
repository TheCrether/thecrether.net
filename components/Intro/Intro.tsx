import styles from "./intro.module.scss";
import Image, { getBackgrounds, checkWebp } from "components/Image";
import { CSSProperties, useEffect, useState } from "react";

export type IntroType = "home" | "projects";

interface Props {
  introType: IntroType;
  title: string;
  height?: string;
}

type Urls = {
  [type in IntroType]: string;
};

// TODO make webp checking
const backgroundNames: Urls = {
  home: "intro.jpg",
  projects: "projects.jpg",
};

export function Intro({ introType, title, height }: Props) {
  const [style, setStyle] = useState<CSSProperties>({});
  // let style: CSSProperties = {
  //   backgroundImage: backgrounds[introType],
  // };
  if (height) {
    if (!style.height) setStyle({ height, ...style });
  }
  let image: JSX.Element = <></>;
  if (introType === "home") {
    image = (
      <Image
        path="profile.jpg"
        alt="Profile Picture"
        id={styles.homeProfilePic}
      ></Image>
    );
  }

  useEffect(() => {
    setStyle({
      ...style,
      backgroundImage: getBackgrounds(backgroundNames[introType], checkWebp()),
    });
  });

  return (
    <div
      className={`${styles.intro} ${
        introType ? styles[introType] : styles.default
      }`}
      style={style}
    >
      <div className="flex">
        {image}
        <h1 id="introTitle">{title}</h1>
      </div>
    </div>
  );
}

export default Intro;
