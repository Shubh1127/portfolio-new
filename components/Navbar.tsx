'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import gsap from 'gsap';
import MetallicPaint from './MetallicPaint';

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '/#about-me',
    },
    {
        name: 'Contact',
        url: '/#contact',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
    const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);
    const navItemsRef = useRef<HTMLDivElement | null>(null);
    const navWrapRef = useRef<HTMLDivElement | null>(null);
    const isCenteredRef = useRef(false);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach((circle) => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement as HTMLElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = (w * w) / 4 / h / 2 + h / 2;
                const D = Math.ceil(2 * R) + 2;
                const delta =
                    Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) +
                    1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`,
                });

                const label = pill.querySelector<HTMLElement>('.pill-label');
                const white =
                    pill.querySelector<HTMLElement>('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(
                    circle,
                    {
                        scale: 1.2,
                        xPercent: -50,
                        duration: 2,
                        ease: 'power3.out',
                        overwrite: 'auto',
                    },
                    0,
                );

                if (label) {
                    tl.to(
                        label,
                        {
                            y: -(h + 8),
                            duration: 2,
                            ease: 'power3.out',
                            overwrite: 'auto',
                        },
                        0,
                    );
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(
                        white,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: 'power3.out',
                            overwrite: 'auto',
                        },
                        0,
                    );
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts) {
            document.fonts.ready.then(layout).catch(() => {});
        }

        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease: 'power3.out',
            overwrite: 'auto',
        });
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease: 'power3.out',
            overwrite: 'auto',
        });
    };

    useEffect(() => {
        const el = navWrapRef.current;
        if (!el) return;

        const getRight = () =>
            window.innerWidth >= 768 ? '2.5rem' : '1.25rem';

        const setPosition = (centered: boolean, immediate = false) => {
            const right = centered ? '50%' : getRight();
            const xPercent = centered ? 50 : 0;

            if (immediate) {
                gsap.set(el, { right, xPercent });
                return;
            }

            gsap.to(el, {
                right,
                xPercent,
                duration: 0.5,
                ease: 'power3.out',
                overwrite: 'auto',
            });
        };

        const onScroll = () => {
            const shouldCenter = window.scrollY > 80;
            if (shouldCenter === isCenteredRef.current) return;
            isCenteredRef.current = shouldCenter;
            setPosition(shouldCenter);
        };

        const onResize = () => {
            setPosition(isCenteredRef.current, true);
        };

        setPosition(isCenteredRef.current, true);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <>
            {/* Logo on the left */}
            <div className="fixed top-5 left-5 md:left-10 z-[40]">
                <div
                    ref={logoRef}
                    className="rounded-full overflow-hidden flex items-center justify-center bg-black"
                    style={{
                        width: '42px',
                        height: '42px',
                    }}
                >
                    <div className="w-full h-full">
                        <MetallicPaint
                            imageSrc="/logo/logo.png"
                            seed={42}
                            scale={4}
                            patternSharpness={1}
                            noiseScale={0.5}
                            speed={0.3}
                            liquid={1}
                            mouseAnimation={false}
                            brightness={2}
                            contrast={0.5}
                            refraction={0.01}
                            blur={0.015}
                            chromaticSpread={2}
                            fresnel={1}
                            angle={0}
                            waveAmplitude={1}
                            distortion={1}
                            contour={0.2}
                            lightColor="#ffffff"
                            darkColor="#000000"
                            tintColor="#feb3ff"
                        />
                    </div>
                </div>
            </div>

            {/* Nav items on the right */}
            <div ref={navWrapRef} className="fixed top-5 z-[40]">
                <nav
                    style={
                        {
                            '--base': '#fff',
                            '--pill-bg': '#060010',
                            '--hover-text': '#060010',
                            '--pill-text': '#fff',
                            '--nav-h': '42px',
                        } as React.CSSProperties
                    }
                >
                    {/* Desktop Nav Items */}
                    <div
                        ref={navItemsRef}
                        className="relative items-center rounded-full hidden md:flex"
                        style={{
                            height: 'var(--nav-h)',
                            background: 'var(--base)',
                        }}
                    >
                        <ul className="list-none flex items-stretch m-0 p-[3px] h-full gap-[3px]">
                            {MENU_LINKS.map((item, i) => {
                                const pillStyle: React.CSSProperties = {
                                    background: 'var(--pill-bg)',
                                    color: 'var(--pill-text)',
                                    paddingLeft: '18px',
                                    paddingRight: '18px',
                                };

                                return (
                                    <li key={item.url} className="flex h-full">
                                        <button
                                            onClick={() =>
                                                router.push(item.url)
                                            }
                                            className="relative overflow-hidden inline-flex items-center justify-center h-full rounded-full font-semibold text-[16px] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer"
                                            style={pillStyle}
                                            onMouseEnter={() => handleEnter(i)}
                                            onMouseLeave={() => handleLeave(i)}
                                        >
                                            <span
                                                className="absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                                                style={{
                                                    background: 'var(--base)',
                                                    willChange: 'transform',
                                                }}
                                                ref={(el) => {
                                                    circleRefs.current[i] = el;
                                                }}
                                            />
                                            <span className="relative inline-block leading-[1] z-[2]">
                                                <span
                                                    className="pill-label relative z-[2] inline-block leading-[1]"
                                                    style={{
                                                        willChange: 'transform',
                                                    }}
                                                >
                                                    {item.name}
                                                </span>
                                                <span
                                                    className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                                                    style={{
                                                        color: 'var(--hover-text)',
                                                        willChange:
                                                            'transform, opacity',
                                                    }}
                                                >
                                                    {item.name}
                                                </span>
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        ref={hamburgerRef}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden rounded-full flex items-center justify-center bg-black"
                        style={{
                            width: 'var(--nav-h)',
                            height: 'var(--nav-h)',
                        }}
                    >
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-white rounded-full absolute duration-300 -translate-y-[5px]',
                                {
                                    'rotate-45 -translate-y-0': isMenuOpen,
                                },
                            )}
                        ></span>
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-white rounded-full absolute duration-300 translate-y-[5px]',
                                {
                                    '-rotate-45 -translate-y-0': isMenuOpen,
                                },
                            )}
                        ></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10 backdrop-blur-lg bg-white/5 border border-white/10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] duration-700 delay-150 z-[-1] backdrop-blur-3xl bg-white/10',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-xl hover:underline"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4">GET IN TOUCH</p>
                    <a href={`mailto:${GENERAL_INFO.email}`}>
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
