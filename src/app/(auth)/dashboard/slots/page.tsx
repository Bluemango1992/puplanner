import Typography from '@/app/Typography/typograph'
import { Container, Navbar } from '@/app/component'
import React from 'react'

function Slots() {
  return (
    <>
    <Navbar />
    <Container>
        <div className='flex justify-center gap-6 bg-slate-300'>
           <Typography variant='h1'>Book Walks</Typography>
        </div>
        <Calendar />
        
    </Container>
    </>
  )
}

export default Slots

const Calendar = () => {
  return (
    <>
    </>
  )
}