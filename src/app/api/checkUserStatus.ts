export default async function checkUserStatus(userId: string): Promise<string> {
  const endpoint = `http://localhost:8080/users/${userId}`;
  try {
    const response = await fetch(endpoint);
    const user = await response.json(); // Renamed 'users' to 'user' for clarity
    console.log('Response:', user);

    // Check if the user object has an '_id' property as an indication of a successful fetch
    if (user && user._id) {
      console.log('User:', user);
      // Return the user's status if found
      return user.status.trim(); // Trim to ensure status like "active " is corrected to "active"
    } else {
      // User not found
      return "not_found";
    }
  } catch (error) {
    console.error('Error checking user status:', error);
    // Return a specific error status or consider rethrowing the error after logging
    return "error";
  }
}
