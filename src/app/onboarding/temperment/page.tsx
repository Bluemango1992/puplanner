import React from 'react'
import Link from 'next/link'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Box, Container, Paper, ListItem, Navbar, Chiplist, Button } from '../../component'
import Typography from '../../Typography/page'
import Chip from '@mui/material/Chip'

const page = () => {

    const behaviorOptions = [
        
        { label: 'Aggression' },
        { label: 'Anxiety' },
        { label: 'Fear of loud noises' },
        { label: 'Fear of other dogs' },
        { label: 'Fear of people' },
        { label: 'None' },
      ];

    const healthOptions = [
        { label: 'Allergies' },
        { label: 'Arthritis' },
        { label: 'Diabetes' },
        { label: 'Epilepsy' },
        { label: 'None' },
      ];

  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <Box flex="flex-col" className='w-1/2 gap-2'>
                        <Typography variant="h1">Health and Behavioural Insights</Typography>
                        <Typography variant="body1">Understanding your dog's health and behavior is key to providing the best care during their walks. Please share some details to help us cater to their specific needs</Typography>
                            <ListItem title="Is your dog neutered?" />
                            <Chip label="Yes" variant="outlined" />
                            <Chip label="No" variant="outlined" />
                            <ListItem title="General Health Condition" />
                            <Chiplist options={healthOptions} />
                            <ListItem title="Behavioural Notes" />
                            <Chiplist options={behaviorOptions} />
                            <Typography variant="body1">Additional Notes</Typography>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Additional Notes"
                                minRows={3}
                                style={{ width: '100%' }}
                            />
                        <div className="flex flex-1 flex-row">
                        <Link href="/onboarding/dog">
                            <Button variant="text" size='full'>Back</Button>
                        </Link>
                        <Link href="/onboarding/requirements">
                            <Button variant="secondary" size='full'>Next</Button>
                        </Link>
                        </div>
            </Box>
        </div>
    </Container>
    </>
    )
}

export default page


