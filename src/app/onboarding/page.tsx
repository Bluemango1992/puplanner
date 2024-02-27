import React from 'react';
import Navbar from '../component/Navbar';
import Container from '../component/Container';

interface PageProps {
    // Add any props you need here
}

const Page: React.FC<PageProps> = () => {
    return (
        <>
        <Navbar />
        <Container>
            hello
        </Container>
            
        </>
    );
};

export default Page;
