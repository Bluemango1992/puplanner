import React from "react";

interface ChipListProps {
    options: { label: string }[];
  }

const Chip: React.FC<{ label: string; variant: "outlined" | "filled" }> = ({
    label,
    variant,
  }) => {
    return (
      <div
        className={`px-3 py-1 rounded-full ${
          variant === "outlined" ? "bg-white border border-gray-300" : "bg-gray-300"
        }`}
      >
        {label}
      </div>
    );
  }



const ChipList: React.FC<ChipListProps> = ({ options }) => {
    return (
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <Chip key={option.label} label={option.label} variant="outlined" />
        ))}
      </div>
    );
  };

export default ChipList;



