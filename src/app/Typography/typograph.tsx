import React from 'react';

// Define the props interface
interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
    children: React.ReactNode;
    align?: "center" | "left" | "right";
    className?: string;
}

// Typography component implementation with Tailwind CSS
const Typography: React.FC<TypographyProps> = ({ variant, children, align = "left", className }) => {
    // Determine the HTML element based on the variant
    const Component = variantMap[variant] || 'span';

    // Determine Tailwind's margin-bottom class based on the variant
    const textColorClass = textColorMap[variant] || '';

    // Determine Tailwind's text alignment class
    const textAlignClass = `text-${align}`;

    const textSizeClass = textsizeMap[variant] || '';

    // Combine Tailwind classes
    const tailwindClasses = ` ${textAlignClass} ${textColorClass} leading-normal tracking-wide font-medium mb-1 ${className} ${textSizeClass}`;

    // Return the component with the appropriate element, Tailwind classes, and styling
    return <Component className={tailwindClasses}>{children}</Component>;
};

// Mapping of variants to their corresponding HTML elements
const variantMap: Record<TypographyProps['variant'], React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span'
};


const textColorMap: Record<TypographyProps['variant'], string> = {
    h1: 'text-orange-900',
    h2: 'text-orange-800',
    h3: 'text-orange-900',
    h4: 'text-orange-800',
    h5: 'text-orange-800',
    h6: 'text-orange-800',
    subtitle1: 'text-orange-900',
    subtitle2: 'text-orange-800',
    body1: 'text-orange-700',
    body2: 'text-orange-700',
    caption: 'text-orange-700',
    overline: 'text-orange-800'
};

const textsizeMap: Record<TypographyProps['variant'], string> = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    subtitle1: 'text-lg',
    subtitle2: 'text-base',
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-sm',
    overline: 'text-sm'
};



export default Typography;
