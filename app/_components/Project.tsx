'use client';
import InfiniteMenu from '@/components/InfiniteMenu';
import { PROJECTS } from '@/lib/data';

// Transform PROJECTS data to match InfiniteMenu's MenuItem interface
const items = PROJECTS.map((project) => ({
    image: project.image,
    link: project.link || '#',
    title: project.title,
    description: project.description,
}));

const Project = () => {
    return (
        <>
            <div className="bg-black text-white py-16 px-6 text-center">
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 sm:mb-6">
                    Crafting Modern Experiences
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-anton leading-tight">
                    VENTURE{' '}
                    <span className="italic bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        SHOWCASE
                    </span>
                </h2>
            </div>
            <div className="h-screen relative">
                <InfiniteMenu items={items} scale={1} />
            </div>
        </>
    );
};

export default Project;
