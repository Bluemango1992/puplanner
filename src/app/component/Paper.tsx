import React from 'react';

type PaperProps = {
    children: React.ReactNode;
};

const Paper: React.FC<PaperProps> = ({ children }) => {
    return (
<<<<<<< HEAD
        <div className=" bg-white shadow-md rounded-md">
=======
        <div className="bg-white shadow-md rounded-md">  
>>>>>>> 89079da (first submit)
            {children}
        </div>
    );
};

export default Paper;
