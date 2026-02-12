import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

const Child = ({ icon }: any) => (
    <span className="flex items-center justify-center gap-3">
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        {!icon && 'Processing...'}
    </span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    icon?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant;
} & (ComponentProps<typeof Link> | ButtonProps);

const Button = ({
    loading,
    variant,
    className,
    children,
    as = 'link',
    icon = false,
    ...rest
}: Props) => {
    const variantClasses = {
        glass: `rounded-full bg-gradient-to-br from-cyan-100/60 via-white/40 to-cyan-300/40 text-slate-900 border border-white/60 ring-1 ring-white/40 backdrop-blur-[28px] shadow-[0_20px_50px_rgba(0,140,255,0.25)] before:content-[''] before:absolute before:inset-[2px] before:rounded-full before:bg-gradient-to-b before:from-white/80 before:via-white/30 before:to-transparent before:opacity-80 before:pointer-events-none after:content-[''] after:absolute after:top-2 after:left-3 after:h-3 after:w-8 after:rounded-full after:bg-white/70 after:blur-[1px] after:opacity-80 after:pointer-events-none hover:from-cyan-200/70 hover:to-cyan-400/50`,
        link: `text-foreground hover:text-primary`,
        'no-color': '',
    }[variant || 'glass'];

    const iconClasses = cn(
        'min-w-9 aspect-square text-xl p-0 inline-flex items-center justify-center rounded-md',
        variantClasses,
    );

    const buttonClasses = cn(
        `group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden`,
        variantClasses,
        { [iconClasses]: icon },
        className,
    );

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;

        if (props.target === '_blank') {
            return (
                <a
                    className={buttonClasses}
                    {...props}
                    href={props.href.toString() || '#'}
                >
                    {variant !== 'link' && variant !== 'glass' && (
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                    )}
                    <span className="z-[1]">
                        {loading ? <Child icon={icon} /> : children}
                    </span>
                </a>
            );
        }

        return (
            <Link className={buttonClasses} {...props} href={props.href || '#'}>
                {variant !== 'link' && variant !== 'glass' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </Link>
        );
    } else if (as === 'button') {
        const props = rest as ButtonProps;

        return (
            <button className={buttonClasses} {...props}>
                {variant !== 'link' && variant !== 'glass' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </button>
        );
    }
};

export default Button;
