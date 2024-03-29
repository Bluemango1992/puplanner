import React from 'react';

interface BoxProps {
    /* define props here */
    children : React.ReactNode; 
    align?: "center" | "left" | "right";
    items?: "start" | "end" | "center";
   className?: string;
   flex?: "flex" | "flex-col" | "flex-row" | "flex-row-reverse" | "flex-col-reverse";
}

const Box: React.FC<BoxProps> = ({ children, align, items, className, flex }) => {
    return (
        <div className={`flex flex-col ${align ? `items-${align}` : ''} ${items ? `justify-${items}` : ''} ${className} py-6 px-7 ${flex}`}>
            {children}
        </div>
    );
}

export default Box;