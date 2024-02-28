import React from 'react';

// Define the props interface
interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
    children: React.ReactNode;
    align?: "center" | "left" | "right";
}

// Typography component implementation with Tailwind CSS
const Typography: React.FC<TypographyProps> = ({ variant, children, align = "left" }) => {
    // Determine the HTML element based on the variant
    const Component = variantMap[variant] || 'span';

    // Determine Tailwind's margin-bottom class based on the variant
    const marginBottomClass = variantMarginBottomMap[variant] || '';

    const textColorClass = textColorMap[variant] || '';

    // Determine Tailwind's text alignment class
    const textAlignClass = `text-${align}`;

    // Combine Tailwind classes
    const tailwindClasses = `${marginBottomClass} ${textAlignClass} ${textColorClass} leading-normal tracking-wide font-medium`;

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

// Mapping of variants to Tailwind's margin-bottom classes
const variantMarginBottomMap: Record<TypographyProps['variant'], string> = {
    h1: 'mb-7', // example margin-bottom for h1
    h2: 'mb-6',
    h3: 'mb-5',
    h4: 'mb-4',
    h5: 'mb-3',
    h6: 'mb-3',
    subtitle1: 'mb-2',
    subtitle2: 'mb-2',
    body1: 'mb-1',
    body2: 'mb-1',
    caption: 'mb-1',
    overline: 'mb-1'
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


export default Typography;
