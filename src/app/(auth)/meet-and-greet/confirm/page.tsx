'use client';

import React from 'react'
import { Container, Paper, Button } from '@/app/component'
import { useRouter } from 'next/navigation'
import Typography from '@/app/Typography/typograph'

const page = () => {

    const router = useRouter()

  return (
    <Container>
        <div className="flex flex-1 justify-center items-center">
            <div className="w-[320px] md:w-[744px]">
        <Paper>
        <div className="p-6">
            <div className="flex flex-col mb-6">
            <Typography variant="h1">You're meet and greet has been booked</Typography>
            <Typography variant="body2">A confirmation email has been sent to you with the details of your meet and greet session. We look forward to meeting you and your furry friend.</Typography>
            </div>
            <Button variant="secondary" onClick={() => router.push('/dashboard')}>Go to Dashboard</Button>
        </div>
        </Paper>
        </div>
        </div>
    </Container>
  )
}

export default page