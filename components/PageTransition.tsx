'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(150% at 50% 50%)', opacity: 0 }}
            transition={{
                clipPath: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] },
                opacity: { duration: 0.3 },
            }}
            style={{
                position: 'absolute', // Changed from fixed to absolute
                top: 0,
                left: 0,
                width: '100%',
                minHeight: '100vh',
                backgroundColor: '#000000',
                zIndex: 50,
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
