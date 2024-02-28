import Link from 'next/link'
import { Button, Chip, duration } from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Box, Container, Paper, ListItem, Navbar, Chiplist } from '../../component'
import Typography from '../../Typography/typograph'





const page = () => {

    const walkOptions = [
        { label: 'Daily' },
        { label: 'Every Other Day' },
        { label: 'Twice a Week' },
        { label: 'Weekly' },
        { label: 'Occasionally' },
      ];

    const durationOptions = [
        { label: '30 minutes' },
        { label: '1 hour' },
      ];

    const timeOptions = [
        { label: 'Morning' },
        { label: 'Afternoon' },
        { label: 'Evening' },
      ];

  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <Paper>
                    <Box flex="flex-col" align="left" items="center">
                        <Typography variant="h1">Owner's Walking Requirements</Typography>
                        <Typography variant="body1">Help us schedule the perfect walks for your dog by sharing your preferred walking routine. Select from the following options to best describe your needs:</Typography>
                        </Box>
                        <Box>
                            <ListItem title="Frequency of Walks Needed" />
                            <Chiplist options={walkOptions} />
                            <ListItem title="Duration of Typical Walks" />
                            <Chiplist options={durationOptions} />
                            <ListItem title="Preferred Time of Day for Walks" />
                            <Chiplist options={timeOptions} />
            
                        </Box>
                        <div className="flex items-center justify-between gap-6 mt-3 px-6 py-7">
                        <Link href="/onboarding/dog">
                            <Button variant="text" color="primary" fullWidth>Back</Button>
                        </Link>
                        <Link href="/onboarding/meetandgreet">
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