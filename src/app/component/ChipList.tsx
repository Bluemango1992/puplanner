import React from "react";
import Chip from "@mui/material/Chip";

interface ChipListProps {
    options: { label: string }[];
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

