import { Slot, SlotWithSession } from '../../types/Slot';
import { GroupedData } from '../../types/GroupData';

export default function addSessionToSlots(groupedData: GroupedData): GroupedData {
// Clone groupedData to avoid mutating the original data
    const updatedData = JSON.parse(JSON.stringify(groupedData));
  
    updatedData.forEach((group: { slots: Slot[]; }) => {
      group.slots.forEach(slot => {
        // Assuming the format of start_time is "HH:MM"
        const startTimeHour = parseInt(slot.start_time.split(':')[0], 10);
  
        // Add 'session' property based on the start time
        if (startTimeHour < 12) {
          (slot as SlotWithSession).session = 'morning';
        } else {
          (slot as SlotWithSession).session = 'afternoon';
        }
      });
    });
  
    return updatedData;
  };
