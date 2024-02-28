import React from 'react'
import Navbar from '../../component/Navbar'
import Container from '@/app/component/Container'
import Paper from '@/app/component/Paper'
import Box from '@/app/component/Box'
import Typography from '../../Typography/page'
import Link from 'next/link'
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'



const page = () => {
  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <Paper>
                    <Box flex="flex-col" align="left" items="center">
                        <Typography variant="h1">Preferred Method of Communication</Typography>
                        <Typography variant="body1">How would you like us to contact you for updates or notifications?</Typography>
                        </Box>
                        <Box>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Select all that apply</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Email" />
                                <FormControlLabel value="male" control={<Radio />} label="Text Message" />
                                <FormControlLabel value="other" control={<Radio />} label="Phone Call" />
                            </RadioGroup>
                            </FormControl>
                        </Box>
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/onboarding">
                            <Button variant="text" color="primary" fullWidth>Back</Button>
                        </Link>
                        <Link href="/onboarding/dog">
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