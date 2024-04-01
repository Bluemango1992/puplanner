import { Slot, SlotWithSession } from '../../types/Slot';

const DateButton = ({ slot, onAddToBasket, basket }: { slot: SlotWithSession, onAddToBasket: (slot: Slot) => void, basket: Slot[] }) => {
    // Check if the slot is in the basket to determine if it is "selected"
    const isSelected = basket.some(basketSlot => basketSlot.slot_id === slot.slot_id);
  
    const handleClick = () => {
      onAddToBasket(slot); // Adjust this function as needed to toggle the slot in the basket
    }
  
    return (
      <button
        className={`flex flex-1 items-center justify-center h-11 text-xs ${isSelected ? 'bg-slate-300 text-slate-800' : 'bg-slate-100 hover:bg-slate-200'}`}
        onClick={handleClick}
      >
        £{slot.price}
      </button>
    );
  };

export default DateButton;