import React from 'react'
import Navbar from '../component/Navbar'
import Container from '../component/Container'
import Box from '../component/Box'
import Paper from '../component/Paper'
import { Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'
import Divider from '../component/Divider'

export default function Signup() {
  return (
    <>
    <Navbar />
    <Container>
        <div className='flex gap-6 p-12'>
            <Box align='left' items='start' className='flex-1 flex-col gap-8'>
            <Typography variant="h3">Peace of Mind for Your Pooch, Convenience for You.</Typography>
            <Typography variant="subtitle1">Reliable, AI-Optimized Dog Walking Services Tailored to Your Schedule.</Typography>
            </Box>
        <div className="flex-1">
        <Paper>
            <Box>
            <TextField placeholder="First Name" fullWidth variant="outlined" />
            <TextField placeholder="Last Name" fullWidth variant="outlined" />
            <TextField placeholder="Email" fullWidth variant="outlined" />
            <TextField placeholder="Password" fullWidth variant="outlined" />
            <TextField placeholder="Number"fullWidth variant="outlined" />

            </Box>
            <Box className='flex flex-1 flex-col gap-6'>
                <Link href="/onboarding">
                    <Button variant="contained" color="primary" fullWidth>Create Account</Button>
                </Link>
                <Typography variant="subtitle2">By signing up, you agree to our Terms of Service and Privacy Policy</Typography>
            <Divider />
            <Link href="/login">
            <Button variant="text" color="primary" fullWidth>I have an account. Sign in!</Button>
            </Link>
            </Box>
            
        </Paper>
        </div>
        </div>
    </Container>
    </>
  )
}

