'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import TextPressure from '@/components/TextPressure';
import { INFO } from '@/lib/data';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 2.5,
            },
        },
    };

    const titleVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const descriptionVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const stat1Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const stat2Variants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const stat3Variants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const stat4Variants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const socialIcons = [
        {
            label: 'GitHub',
            href: INFO.githubProfile,
            Icon: Github,
            variants: stat1Variants,
        },
        {
            label: 'LinkedIn',
            href: INFO.linkedinProfile,
            Icon: Linkedin,
            variants: stat2Variants,
        },
        {
            label: 'X',
            href: INFO.xProfile,
            Icon: Twitter,
            variants: stat3Variants,
        },
        {
            label: 'Instagram',
            href: INFO.instagramProfile,
            Icon: Instagram,
            variants: stat4Variants,
        },
    ];

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <motion.div
                    className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="banner-title leading-[.95]"
                        variants={titleVariants}
                    >
                        <div
                            style={{ position: 'relative', minHeight: '80px' }}
                            className="sm:min-h-[100px] overflow-visible"
                        >
                            <TextPressure
                                text="FULL STACK"
                                flex={false}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="hsl(var(--primary))"
                                minFontSize={40}
                                className="text-left"
                            />
                        </div>
                        <div
                            style={{
                                position: 'relative',
                                minHeight: '80px',
                                marginLeft: '1rem',
                            }}
                            className="sm:min-h-[100px] overflow-visible"
                        >
                            <TextPressure
                                text="DEVELOPER"
                                flex={false}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="hsl(var(--foreground))"
                                minFontSize={60}
                                className="text-left"
                            />
                        </div>
                    </motion.div>
                    <motion.p
                        className="banner-description mt-6 text-lg text-muted-foreground"
                        variants={descriptionVariants}
                    >
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Shubham
                        </span>
                        . A creative Full Stack Developer with 2+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </motion.p>
                    <motion.div className="" variants={buttonVariants}>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={INFO.upworkProfile}
                            variant="glass"
                            className="mt-9 banner-button"
                        >
                            Hire Me
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={INFO.githubProfile}
                            variant="glass"
                            className="mt-9 ms-2 banner-button"
                        >
                            View Github
                        </Button>
                    </motion.div>
                </motion.div>
                {/* social icons */}
                <motion.div
                    className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {socialIcons.map(({ label, href, Icon, variants }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={variants}
                            className="relative inline-flex items-center justify-center size-11 sm:size-12 rounded-full overflow-hidden border border-white/60 ring-1 ring-white/40 backdrop-blur-[28px] bg-gradient-to-br from-cyan-100/60 via-white/40 to-cyan-300/40 text-slate-900 shadow-[0_20px_50px_rgba(0,140,255,0.25)] transition-colors before:content-[''] before:absolute before:inset-[2px] before:rounded-full before:bg-gradient-to-b before:from-white/80 before:via-white/30 before:to-transparent before:opacity-80 before:pointer-events-none after:content-[''] after:absolute after:top-2 after:left-3 after:h-3 after:w-8 after:rounded-full after:bg-white/70 after:blur-[1px] after:opacity-80 after:pointer-events-none hover:from-cyan-200/70 hover:to-cyan-400/50"
                        >
                            <span className="sr-only">{label}</span>
                            <Icon
                                className="size-5 sm:size-6"
                                aria-hidden="true"
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
