import React from 'react';

type PaperProps = {
    children: React.ReactNode;
};

const Paper: React.FC<PaperProps> = ({ children }) => {
    return (
        <div className=" bg-white shadow-md rounded-md">
            {children}
        </div>
    );
};

export default Paper;
