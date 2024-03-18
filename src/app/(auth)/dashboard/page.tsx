import Typography from '@/app/Typography/typograph'
import { Container, Navbar, Button, Paper, Calendar } from '@/app/component'
import React from 'react'

const user = {
  name: 'John Doe'
}

function Dashboard() {

  const IsUserBookedwalks = false

  return (
    <>
    <Navbar />
    <Container>
      <div className='flex justify-center gap-6'>
        { IsUserBookedwalks ? 
        <Paper>
            <div className='flex flex-col p-6'>
          <Typography variant="h1">
            Welcome to Back {user.name}!
          </Typography>
            <Button variant="primary">Book a Walk</Button>
            </div>
        </Paper>
         : <Paper>
          <div className='flex flex-col p-6'>
          <Calendar />
          </div>  
          </Paper>
        }
      <Basket />
      </div>
    </Container>
    </>
  )
}

export default Dashboard

const Basket = () => {
  return (
    <Paper>
      <div className='flex flex-col p-6'>
      <Typography variant="h3">Basket</Typography>
      <Typography variant="h4">Total: £0.00</Typography>
      <Button variant="primary">Checkout</Button>
      </div>
      <div className='flex flex-col p-6'>
          <Typography variant="h3">Booked walks</Typography>
          <Typography variant="h4">Guide price</Typography>
          <Button variant="outlined">Book a Walk</Button>
      </div>
    </Paper>
  )
}

