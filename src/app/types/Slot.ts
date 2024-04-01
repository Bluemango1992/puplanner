export interface Slot {
    slot_id: number;
    date: string;
    start_time: string;
    end_time: string;
    status: string;
    price: number;
    id: string;
}

export interface SlotWithSession extends Slot {
    session: 'morning' | 'afternoon';
}