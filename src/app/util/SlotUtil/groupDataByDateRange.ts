import { Slot } from '../../types/Slot';
import { DateRange } from '../../types/DateRange';



function isValidSlot(slot: any): slot is Slot {
    return (
      typeof slot === 'object' &&
      typeof slot.slot_id === 'number' &&
      typeof slot.date === 'string' &&
      typeof slot.start_time === 'string' &&
      typeof slot.end_time === 'string' &&
      typeof slot.status === 'string' &&
      typeof slot.price === 'number'
    );
  }
  
  // Runtime check for an array of Slot objects
  function isValidSlotsArray(slots: any[]): slots is Slot[] {
    return Array.isArray(slots) && slots.every(isValidSlot);
  }  


export default function groupDataByDateRange(data: any[], dateRanges: DateRange[]): { dateRange: DateRange; slots: Slot[] }[] {
    // Perform runtime check on the input data
    if (!isValidSlotsArray(data)) {
      console.error('Invalid data format received:', data);
      // Return an empty array or handle this scenario as needed
      return [];
    }
      const isWithinRange = (date: string, start: string, end: string) => {
        const d = new Date(date);
        const startDate = new Date(start);
        const endDate = new Date(end);
        return d >= startDate && d <= endDate;
      };
    
      // Check to ensure data is not null and is an array before proceeding
      if (!Array.isArray(data) || data.length === 0) {
        // Return an array matching the expected structure but empty
        return dateRanges.map(range => ({
          dateRange: { start: range.start, end: range.end },
          slots: []
        }));
      }
    
      // Directly iterate through each date range and group data accordingly
      const groupedByDateRange = dateRanges.map(range => {
        // Filter the server data to include only those within the current date range
        const filteredData = data.filter(dataItem =>
          isWithinRange(dataItem.date, range.start, range.end)
        );
    
        // Return an object that includes both the date range and the filtered data
        return {
          dateRange: { start: range.start, end: range.end },
          slots: filteredData
        };
      });
    
      return groupedByDateRange;
    }
    