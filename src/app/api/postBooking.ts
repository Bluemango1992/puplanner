import { Booking } from '../types/Booking';

const postBooking = async (bookingData: Booking) => {

  const response = await fetch('http://localhost:8080/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  
  if (response.ok) {
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json(); // Only parse as JSON if the content type is correct
      console.log('Booking successful:', data);
      return data;
    } else {
      console.log('Booking successful, no JSON returned');
      return null; // or an appropriate value for your context
    }
  } else {
    throw new Error('Network response was not ok');
  }
}

export default postBooking;