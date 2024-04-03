export const userId = "user12345"; // Example: Your user ID as the service provider

export const users = {
  "user12345": {
    userId: "user12345",
    location: { lat: 51.509865, lng: -0.118092 }, // Example: Central London
  },
  "user67890": {
    userId: "user67890",
    location: { lat: 51.501476, lng: -0.141688 }, // Example: Slightly west London
  }
};

export const myLocation = { lat: 51.5074, lng: -0.1278 }; // Your location as the service provider

export const basePrice = 15; // Base price for a walk

export let dogs = [
  {
    dogId: "dog12345",
    userId: "user12345",
    Name: "Baxter",
    Breed: "Golden Retriever",
    Premium : 3,
    Size: "Large"
  },
  {
    dogId: "dog54321",
    userId: "user67890",
    Name: "Luna",
    Breed: "Border Collie",
    Premium : 4,
    Size: "Medium"
  },
  {
    dogId: "dog98765",
    userId: "user12345",
    Name: "Max",
    Breed: "Beagle",
    Premium : 5,
    Size: "Small"
  }
];

// Sample data
export const data = {
  slots: [
    {
      dateRange: "2023-04-01 to 2023-04-07",
      days: {
        "Monday": [
          {
            slotId: "mon-0900-0930-0401",
            timeSlot: "09:00 - 09:30",
            availability: 6
          }
        ],
        "Tuesday": [
          {
            slotId: "tue-0900-0930-0402",
            timeSlot: "09:00 - 09:30",
            availability: 6
          }
        ]
      }
    },
    {
      dateRange: "2023-04-08 to 2023-04-14",
      days: {
        "Monday": [
          {
            slotId: "mon-0900-0930-0408",
            timeSlot: "09:00 - 09:30",
            availability: 6
          }
        ],
        "Wednesday": [
          {
            slotId: "wed-0900-0930-0410",
            timeSlot: "09:00 - 09:30",
            availability: 6
          }
        ]
      }
    }
  ]
};
