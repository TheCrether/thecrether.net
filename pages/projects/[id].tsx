import { Layout, Header, Image, Container, Date } from "@components";
import { getAllProjectIds, ProjectPost, getProjectData } from "@lib/projects";
import { layout } from "@styles";
import styles from "./post.module.scss";
import { flex } from "@lib/utils";

interface Props {
  projectData: ProjectPost;
}

export default function ProjectPage({ projectData }: Props) {
  const { imgPath, date, language, title, website, content } = projectData;

  return (
    <Layout customHeader maxWidth mainClassName={styles.main}>
      <Header projectPost></Header>
      <div
        className={flex(imgPath ? styles.topPart : styles.noImg)}
        id="topPart"
      >
        {imgPath && <Image id="topImg" path={projectData.imgPath}></Image>}
        <div className={flex(styles.info)}>
          <Container>
            <h1>{title}</h1>
            <div className={flex(styles.properties)}>
              {date && <Date dateString={date.toString()}></Date>}
              <p>Language: {language}</p>
              <a href={website}>Website</a>
            </div>
          </Container>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={layout.container}
        id={styles.post}
      ></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
