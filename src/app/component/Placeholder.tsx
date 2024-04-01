import React from 'react';

interface PlaceholderProps {
    children?: React.ReactNode;
    classes?: string;
}
export default function Placeholder({ children, classes }: PlaceholderProps) {
    return <div className={`flex flex-1 flex-col gap-4 justify-center items-center ${classes} border-2 border-dotted border-orange-500 rounded-lg p-6`}>{children}</div>;
}