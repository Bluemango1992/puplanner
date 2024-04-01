import React from 'react'
import { Container, Navbar, Paper, Box, Button, TextField } from '@/app/component'
import Link from 'next/link'
import Typography from '@/app/Typography/typograph'


const page = () => {
  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <Paper>
                    <Box flex="flex-col" align="left" items="center">
                        <Typography variant="h1">About Your Furry Friend</Typography>
                        <Typography variant="body1">We want to get to know your dog a bit better! This information will help us ensure they get the most enjoyable and suitable walks. Please tell us about your dog</Typography>
                        </Box>
                        <Box>
                            <TextField placeholder="Dog's Name" fullWidth variant="outlined" type="text" />
                            <TextField placeholder="Breed" fullWidth variant="outlined" type="text" />
                            <TextField placeholder="Age" fullWidth variant="outlined" type="number" />
                            <TextField placeholder="Weight" fullWidth variant="outlined" type="number" />
                        </Box>
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/onboarding/owner">
                            <Button variant="text" size='medium'>Back</Button>
                        </Link>
                        <Link href="/onboarding/temperment">
                            <Button variant="outlined" size='medium'>Next</Button>
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