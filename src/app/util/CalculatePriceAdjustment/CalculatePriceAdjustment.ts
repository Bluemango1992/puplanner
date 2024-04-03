const basePrice = 15; // Consider moving this to a more central config if used across multiple files

export const calculatePriceAdjustment = (premium : number) => {
    switch (premium) {
      case 1:
        // 5% decrease for the most well-behaved dogs
        return basePrice * 0.95; // £14.25
      case 2:
        // Flat rate decrease
        return basePrice - 2; // £13
      case 3:
        // Neutral zone, no change
        return basePrice; // £15
      case 4:
        // 10% increase for dogs needing additional management
        return basePrice * 1.1; // Alternatively, basePrice + 1.5 for a fixed increase
      case 5:
        // 20% increase for dogs with significant behavioral challenges
        return basePrice * 1.2; // Alternatively, basePrice + 3 for a fixed increase
      default:
        // Default to base price if there's an unexpected score
        return basePrice;
    }
  };