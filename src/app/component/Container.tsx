
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {

    const classes = `my-6 mx-6 h-full md:mx-20 ${className}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Container;
