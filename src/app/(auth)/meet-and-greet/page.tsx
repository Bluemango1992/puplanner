import Typography from '@/app/Typography/typograph'
import { Container, Paper } from '@/app/component'
import CalendarComponent from './Calendar'
import React from 'react'

const page = () => {

    const days = [
        {
            dayOfWeek: 0,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 1,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 2,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 3,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 4,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 5,
            openTime: '09:00',
            closeTime: '18:00',
        },
        {
            dayOfWeek: 6,
            openTime: '09:00',
            closeTime: '18:00',
        },
    ]

  return (
    <Container>
        <div className="flex flex-1 justify-center items-center">
            <div className="max-w-[500px]">
        <Paper>
        <div className="p-6">
            <div className="flex flex-col mb-6">
            <Typography variant="h1">Schedule Your Meet and Greet Session</Typography>
            <Typography variant="body2">A Meet and Greet session is a great opportunity for you and your furry friend to meet with your potential dog walker.</Typography>
            </div>
            <CalendarComponent days={days} closedDays={[]} />
        </div>
        </Paper>
        </div>
        </div>
    </Container>
  )
}

export default page