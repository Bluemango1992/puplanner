
<<<<<<< HEAD
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
=======
interface ContainerProps {
    children: React.ReactNode;
  };

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="bg-slate-200 my-12 mx-24">
            {children}
        </div>
    );
    }

 export default Container;
>>>>>>> 89079da (first submit)
