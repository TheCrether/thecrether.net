import Head from "next/head";
import { Layout, Intro, siteTitle } from "@components";
import Link from "next/link";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { sectionAnimator } from "@lib/utils";

export default function Home() {
  const intro = (
    <Intro title="TheCrether" introType="home" height="50vh"></Intro>
  );
  useEffect(() => {
    sectionAnimator();
  });
  return (
    <Layout home intro={intro} className={styles.intro}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>
        <span>Hello</span>, I am Denis &quot;TheCrether&quot; Imeri
      </h2>

      <ul className="section">
        <h3>About</h3>
        <p>I am a 17-year old student</p>
        <p>
          I am from Austria and go to{" "}
          <a href="https://www.htl-kaindorf.at/">HTBLA Kaindorf</a>
        </p>
        <p>
          <div>
            <Link href="/about">
              <a>find out more on my About page →</a>
            </Link>
          </div>
        </p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </ul>
      <section className="section">
        <h3>Projects</h3>
        <p>sa</p>
        <p>sa</p>
        <p>sa</p>
      </section>
      <section className="section">
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </section>
    </Layout>
  );
}
