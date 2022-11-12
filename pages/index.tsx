import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import { PageInfo, Project, Skill, Social } from "../typing";
import {
  fetchProjects,
  fetchSkills,
  fetchSocial,
  fetchUserInfo,
} from "../utils/fetchData";
type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  superSkill: Skill[];
};
export default function Home({
  pageInfo,
  socials,
  skills,
  projects,
  superSkill,
}: Props) {
  return (
    <div>
      <Head>
        <title>Muhammad Naufal S | Personal Website </title>
        <meta
          name="description"
          content="Muhammad Naufal Sabarrudin Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen overflow-y-scroll bg-[#212428] overflow-x-hidden ">
        <Header socials={socials} />
        <Hero pageInfo={pageInfo} skills={superSkill} />
        <About pageInfo={pageInfo} skills={skills} socials={socials} />
        <Portfolio projects={projects} />
        <Contact socials={socials} pageInfo={pageInfo} />
        <footer className="text-center   mt-32   pt-5 pb-5  border-t-2 border-[#121415]">
          <h1 className="text-sm text-[#878e99]">
            &copy; All rights reserved by Muhammad Naufal Sabarrudin
          </h1>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchUserInfo();
  const socials: Social[] = await fetchSocial();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const superSkill: Skill[] = skills.filter(
    (item) => item.isBestSkill === true
  );
  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      superSkill,
    },
    revalidate: 36000,
  };
};
