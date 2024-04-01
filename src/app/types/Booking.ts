export interface Booking {
    dateTime: string;
    ownerId: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    type: "meet-and-greet" | "otherType"; // Specify other types as needed
  }
  