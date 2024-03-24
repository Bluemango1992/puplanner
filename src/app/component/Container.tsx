
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {

    const classes = `my-20 mx-20 h-full md:mx-40 ${className}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Container;
