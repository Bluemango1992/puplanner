
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {

    const classes = `my-4 mx-2 sm:mx-40 ${className}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

export default Container;
