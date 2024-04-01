interface DogData {
    name: string;
    breed: string;
    age: number;
    weight: number;
  }
  
  /**
   * Send dog data to the backend.
   * @param {DogData} dogData The data of the dog to add.
   */
  export const addDog = async (dogData: DogData): Promise<any> => {
    try {
      const response = await fetch('http://localhost:3001/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dogData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };