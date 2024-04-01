import React from 'react'
import { Container, Paper, Box, Navbar, ListItem } from '../../../component'
import Link from 'next/link'
import { Button } from '@mui/material'
import Typography from '../../../Typography/typograph'


const page = () => {
  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <Paper>
                <Box flex="flex-col" align="left" items="center">
                        <Typography variant="h1">Consent and Confirmation</Typography>
                        </Box>
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/">
                            <Button variant="contained" color="primary" fullWidth>Confirm</Button>
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