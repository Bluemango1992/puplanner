export default function generateDateRanges(startDate: Date, numberOfRanges: number) {
    
    const dateRanges = [];
  
    for (let i = 0; i < numberOfRanges; i++) {
      const rangeStartDate = new Date(startDate);
      rangeStartDate.setDate(rangeStartDate.getDate() + i * 7); // 7 days in a week
  
      const rangeEndDate = new Date(rangeStartDate);
      rangeEndDate.setDate(rangeEndDate.getDate() + 6); // 6 days in a week
  
      // Format dates as 'YYYY-MM-DD'
      const formattedStartDate = rangeStartDate.toISOString().split('T')[0];
      const formattedEndDate = rangeEndDate.toISOString().split('T')[0];
  
      dateRanges.push({ start: formattedStartDate, end: formattedEndDate });
    }
  
    return dateRanges;
  };