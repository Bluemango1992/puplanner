import { calculateDistance } from './index';

describe('calculateDistance function', () => {
  it('should calculate the distance between two locations correctly', () => {
    const loc1 = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates
    const loc2 = { lat: 34.0522, lng: -118.2437 }; // Los Angeles coordinates

    const expectedDistance = '3935.56'; // Expected distance in kilometers

    const result = calculateDistance(loc1, loc2);

    expect(result).toEqual(expectedDistance);
  });

  // You can add more tests here for different scenarios, edge cases, etc.
});