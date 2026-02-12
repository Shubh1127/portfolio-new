'use client';
import { useEffect } from 'react';

const FluidBackground = () => {
    useEffect(() => {
        // Initialize the fluid cursor effect after component mounts
        if (typeof window !== 'undefined') {
            // Add a small delay to ensure canvas is mounted
            const timer = setTimeout(async () => {
                const { default: initFluidCursor } = await import('@/app/hooks/use-FluidCursor');
                initFluidCursor();
            }, 100);
            
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <canvas
            id="fluid"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default FluidBackground;