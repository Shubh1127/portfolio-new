import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Achievements from './_components/Achievements';
import Skills from './_components/Skills';
// import ProjectList from './_components/ProjectList';
import Project from './_components/Project';
// import Project from './_components/Project';
// import { PROJECTS } from '../lib/data';
// import ThreeStarfield from '@/components/ThreeStarfield';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Achievements />
            <Project />
            {/* <Project index={1} project={PROJECTS[1]} /> */}
        </div>
    );
}
