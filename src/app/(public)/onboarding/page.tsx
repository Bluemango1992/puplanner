import React from 'react';
import { Container, Box, Navbar } from '../../component';
import { Button } from '../../component';
import Link from 'next/link';
import Typography from '../../Typography/typograph';

interface PageProps {
    // Add any props you need here
}

const Page: React.FC<PageProps> = () => {
    return (
        <>
        <Container>
            <div className='flex justify-center items-center'>
                <div className='w-1/2'>
                        <Box flex="flex-col" align="left" items="center">
                            <Typography variant="h1">Peace of Mind for Your Pooch, Convenience for You.</Typography>
                
                            <Typography variant="body1">At Puplanner, we're dedicated to providing the best possible walks for your furry family member. This quick questionnaire helps us understand your dog's unique needs and preferences. Your responses will guide us in tailoring our services to ensure every walk is a joy for your pup</Typography>
                            <Typography variant="body1">our privacy is important to us. Rest assured, all information shared here is kept confidential and used solely to enhance your dog's walking experience. Let's get started on this short journey to better, happier walks!</Typography>
                            </Box>
                            <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                            <Link href="/">
                                <Button variant="text">Back Home</Button>
                            </Link>
                            <Link href="/onboarding/owner">
                                <Button variant="primary">Get Started</Button>
                            </Link>
                            </div>
                    </div>
            </div>
        </Container>
        </>
    );
};

export default Page;
