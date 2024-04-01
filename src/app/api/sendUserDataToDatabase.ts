
export async function sendUserDataToDatabase(userId: string, emailAddress: string) {
  try {
    if (!userId || !emailAddress) {
      console.log('User is not signed in or no email address available');
      return;
    }

    // Your endpoint URL
    const endpoint = 'http://localhost:3001/users';

    // Prepare the data to be sent
    const userData = {
      userId,
      emailAddress,
    };

    // Send the data to your server using fetch
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to send user data to the database');
    }

    console.log('User data successfully sent to the database');
  } catch (error) {
    console.error('Error sending user data to the database:', error);
  }
}
