// Function to calculate distance between two points (simplified Euclidean distance for demonstration)
export const calculateDistance = (loc1 : {lat: number, lng: number}, loc2 : {lat: number, lng: number}) => {
    const radlat1 = Math.PI * loc1.lat / 180;
    const radlat2 = Math.PI * loc2.lat / 180;
    const theta = loc1.lng - loc2.lng;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344; // Convert to kilometers
    return dist.toFixed(2); // Return distance rounded to two decimal points
  };