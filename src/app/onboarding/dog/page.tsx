import React from 'react'
import Navbar from '../../component/Navbar'
import Container from '@/app/component/Container'
import Paper from '@/app/component/Paper'
import Box from '@/app/component/Box'
import Typography from '../../Typography/page'
import Link from 'next/link'
import { Button, TextField } from '@mui/material'



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
                            <TextField placeholder="Dog's Name" fullWidth variant="outlined" />
                            <TextField placeholder="Breed" fullWidth variant="outlined" />
                            <TextField placeholder="Age" fullWidth variant="outlined" />
                            <TextField placeholder="Weight" fullWidth variant="outlined" />
                        </Box>
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/onboarding/owner">
                            <Button variant="text" color="primary" fullWidth>Back</Button>
                        </Link>
                        <Link href="/onboarding/temperment">
                            <Button variant="contained" color="primary" fullWidth>Next</Button>
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