import addSessionToSlots from './addSessionToSlots';
import { GroupedData } from '../../types/GroupData';

describe('addSessionToSlots function', () => {
  it('should add session property to slots based on start time', () => {
    const groupedData = [
      {
        slots: [
          { start_time: '09:00' },
          { start_time: '13:00' },
          { start_time: '16:30' },
        ],
      },
      {
        slots: [
          { start_time: '10:30' },
          { start_time: '14:00' },
          { start_time: '18:00' },
        ],
      },
    ];

    const expectedData = [
      {
        slots: [
          { start_time: '09:00', session: 'morning' },
          { start_time: '13:00', session: 'afternoon' },
          { start_time: '16:30', session: 'afternoon' },
        ],
      },
      {
        slots: [
          { start_time: '10:30', session: 'morning' },
          { start_time: '14:00', session: 'afternoon' },
          { start_time: '18:00', session: 'afternoon' },
        ],
      },
    ];

    const result = addSessionToSlots(groupedData as GroupedData);

    console.log(result);

    expect(result).toEqual(expectedData);
  });

  // You can add more tests here for different scenarios, edge cases, etc.
});