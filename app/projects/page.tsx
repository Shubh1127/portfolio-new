'use client';
import InfiniteMenu from '@/components/InfiniteMenu';
import { PROJECTS } from '@/lib/data';

const items = PROJECTS.map((project) => ({
    image: project.image,
    link: project.link || '#',
    title: project.title,
    description: project.description,
}));

export default function ProjectsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="overflow-hidden bg-black min-h-[60vh] flex items-center justify-center">
                <div className="container relative z-10 bg-black text-center py-20">
                    <h1 className="font-anton text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[150px] xl:text-[180px] leading-none text-white mb-6">
                        MY WORKS
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] mb-4">
                        CRAFTING DIGITAL EXPERIENCES
                    </p>
                    <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-white/90">
                        with passion & code.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <div className="h-screen relative">
                <div className="relative z-10">
                    <InfiniteMenu items={items} scale={1} />
                </div>
            </div>
        </>
    );
}
