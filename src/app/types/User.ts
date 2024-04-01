export interface User {
    userId: string; // Assuming userId is a string
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    id: string; // Assuming this is also a string that uniquely identifies the user, used in the user update endpoint
  }
  