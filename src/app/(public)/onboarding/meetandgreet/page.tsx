import { Container, Navbar, Box, Paper, ListItem, Button } from '@/app/component'
import Link from 'next/link'
import Typography from '@/app/Typography/typograph'
import React from 'react'



const page = () => {
  return (
    <>
        <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
                <Paper>
                <Box flex="flex-col" align="left" items="center">
                        <Typography variant="h1">Schedule Your Meet and Greet Session</Typography>
                        </Box>
                        <Box>
                            <ListItem title='Why a Meet and Greet?' caption='We believe in personal connections. A Meet and Greet session is a great opportunity for you and your furry friend to meet with your potential dog walker. Its all about ensuring comfort safety and compatibility for everyone involved.' />
                            <ListItem title='What Happens in a Meet and Greet?' caption='These casual, 20-30 minute sessions allow your dog to get acquainted with their walker in a relaxed environment. You can discuss your dogs habits, preferences, and any special requirements with the walker.' />
                        <Box align='center' items='center' flex='flex-col' className='mt-3 w-full'>
                            <Calendar />
                        </Box>
                        </Box>
                        
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/onboarding/requirements">
                            <Button variant="text">Back</Button>
                        </Link>
                        <Link href="/onboarding/confirmation">
                            <Button variant="text">Next</Button>
                        </Link>
                        </div>  
                </Paper>
        </div>
    </Container>
    </>
    )
}

export default page

const Calendar = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Typography variant='h2'>Select a Date and Time</Typography>
            <div className='flex flex-row gap-6'>
                <Button variant='outlined'>Today</Button>
                <Button variant='outlined'>Tomorrow</Button>
                <Button variant='outlined'>This Week</Button>
            </div>
            <div className='flex flex-row gap-6'>
                <Button variant='outlined'>Next Week</Button>
                <Button variant='outlined'>This Month</Button>
                <Button variant='outlined'>Next Month</Button>
            </div>
        </div>
    )
}
