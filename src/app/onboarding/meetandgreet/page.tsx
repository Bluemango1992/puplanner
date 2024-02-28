import { Container, Navbar, Box, Paper, ListItem } from '@/app/component'
import Link from 'next/link'
import { Button } from '@mui/material'
import Typography from '@/app/Typography/page'
import React from 'react'
import Calendar from '../../component/Calendar/index'


const page = () => {
  return (
    <>
        <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
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
                            <Button variant="text" color="primary" fullWidth>Back</Button>
                        </Link>
                        <Link href="/onboarding/confirmation">
                            <Button variant="contained" color="primary" fullWidth>Book Meet</Button>
                        </Link>
                        </div>  
                </Paper>
                </div>
        </div>
    </Container>
    </>
    )
}

export default page