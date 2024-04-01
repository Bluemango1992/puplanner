import { AuthUser } from "@/app/types/AuthUser";

export default async function BookMeetandGreet(user: AuthUser ): Promise<void> {
    const selectedTime = localStorage.getItem('selectedTime'); // or use date.dateTime.toISOString()
    if (selectedTime) {
      try {
        const bookingResponse = await fetch('http://localhost:8080/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            dateTime: selectedTime,
            ownerId: user.userId, 
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            address: user.address,
            type: 'meet-and-greet',
          }),
        });
  
        if (!bookingResponse.ok) throw new Error('Booking could not be completed');
  
        const bookingData = await bookingResponse.json();
        console.log('Booking successful:', bookingData);
  
        // Assuming the user update endpoint expects the same data structure as before
        const userUpdateResponse = await fetch(`http://localhost:8080/users/${user.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            bookingId: bookingData.id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            address: user.address,
          }),
        });
  
        if (!userUpdateResponse.ok) throw new Error('Failed to update user with booking information');
  
        console.log('User updated with booking information');
      } catch (error) {
        console.error('Error booking meet and greet:', error);
      }
    }
  }  