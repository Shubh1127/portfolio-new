'use client';
import SectionTitle from '@/components/SectionTitle';
import ScrollVelocity from '@/components/ScrollVelocity';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const renderRow = (items: { name: string; icon: string }[]) => (
        <>
            {items.map((item) => (
                <span
                    key={item.name}
                    className="inline-flex items-center gap-4 mr-10"
                >
                    <Image
                        src={item.icon}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-8 w-8 md:h-16 md:w-16 object-contain flex-shrink-0"
                    />
                    <span className="whitespace-nowrap">{item.name}</span>
                </span>
            ))}
        </>
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                {/* Scrolling Velocity Sections */}
                <div className="slide-up mb-20">
                    <ScrollVelocity
                        rows={[
                            renderRow(MY_STACK.frontend),
                            renderRow(MY_STACK.backend),
                            renderRow(MY_STACK.database),
                            renderRow(MY_STACK.tools),
                        ]}
                        velocity={50}
                        className="text-foreground/80"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
