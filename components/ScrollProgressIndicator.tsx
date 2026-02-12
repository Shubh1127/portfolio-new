'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function ScrollProgressIndicator() {
    const barRef = useRef<HTMLDivElement>(null);
    const [isProjectMode, setIsProjectMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!barRef.current) return;

            const container = document.querySelector(
                '[data-project-scroll]',
            ) as HTMLElement | null;

            if (container) {
                const rect = container.getBoundingClientRect();
                const inView =
                    rect.top <= window.innerHeight && rect.bottom >= 0;

                if (inView) {
                    setIsProjectMode(true);

                    const scrollTop = container.scrollTop;
                    const max = container.scrollHeight - container.clientHeight;

                    const percent = max > 0 ? scrollTop / max : 0;

                    barRef.current.style.transform = `translateY(-${
                        100 - percent * 100
                    }%)`;

                    return;
                }
            }

            // page mode
            setIsProjectMode(false);

            const { scrollHeight, clientHeight } = document.documentElement;

            const progress = window.scrollY / (scrollHeight - clientHeight);

            barRef.current.style.transform = `translateY(-${
                100 - progress * 100
            }%)`;
        };

        window.addEventListener('scroll', handleScroll);
        document
            .querySelector('[data-project-scroll]')
            ?.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document
                .querySelector('[data-project-scroll]')
                ?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`
                fixed top-1/2 -translate-y-1/2 w-1.5 h-[120px] rounded-full 
                bg-background-light overflow-hidden z-50 transition-all duration-300
                ${isProjectMode ? 'left-1/2 -translate-x-1/2' : 'right-[2%]'}
            `}
        >
            <div
                ref={barRef}
                className="w-full bg-primary h-full rounded-full"
            />
        </div>
    );
}
