import React from 'react';

type PaperProps = {
    children: React.ReactNode;
};

const Paper: React.FC<PaperProps> = ({ children }) => {
    return (
        <div className=" bg-slate-50 shadow-md rounded-md min-w-80">
            {children}
        </div>
    );
};

export default Paper;
