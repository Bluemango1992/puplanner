import { Container, Navbar, Paper } from '@/app/component'
import React from 'react'
import BookingsSlots from '../../component/BookingSlots/_layout'
import CustomerProfileCard from '@/app/component/Cards/CustomerProfileCard'

const customerData = [
  {
    "user_id": 1,
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "phone": "123-456-7890",
    "communicationPreferences": [
      "Email",
      "PhoneCall"
    ],
    "petProfiles": [
      {
        "petName": "Rex",
        "breed": "Labrador",
        "age": 5,
        "size": "Large",
        "neutered": true,
        "healthConditions": [
          "None"
        ],
        "behavioralNotes": [
          "Fear of loud noises"
        ],
        "walkFrequency": "Daily",
        "walkDuration": "30 minutes",
        "preferredWalkTimeOfDay": "Morning"
      }
    ],
    "id": "7326"
  }
];

function Dashboard() {

  return (
    <>
    <Container>
        <div className="p-6 h-96 bg-white">
      <BookingsSlots />
        </div>
        <CustomerProfileCard customerData={customerData} />
    </Container>
    </>
  )
}

export default Dashboard

