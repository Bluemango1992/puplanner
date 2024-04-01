import { sendUserDataToDatabase } from './sendUserDataToDatabase';

// Mock the global.fetch with a more accurate type
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ success: true }),
}) as unknown as Promise<Response>);

beforeEach(() => {
  // Clear all mock instances and calls to constructor and all methods
  jest.clearAllMocks();
});

describe('sendUserDataToDatabase', () => {
  it('successfully sends user data to the database', async () => {
    const userId = 'user123';
    const emailAddress = 'test@example.com';

    await sendUserDataToDatabase(userId, emailAddress);

    // Expect fetch to have been called with the correct URL and body
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        emailAddress,
      }),
    });
  });

  it('logs an error if the user is not signed in or email is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const userId = '';
    const emailAddress = '';

    await sendUserDataToDatabase(userId, emailAddress);

    // Expect an error log for not being signed in
    expect(consoleSpy).toHaveBeenCalledWith('User is not signed in or no email address available');

    consoleSpy.mockRestore(); // Restore original console.log behavior
  });

  // Add more tests as needed to cover other branches of your function
});
