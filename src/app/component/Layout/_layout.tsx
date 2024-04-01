import React from 'react'

type Layout = {
    children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children = "Hello World" }) => {
    return (
        <div className="flex flex-1 flex-col gap-6 sm:flex-row">
            {children}
        </div>
    );
};

export default Layout;