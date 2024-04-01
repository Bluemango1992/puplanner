'use client';

import { useState } from 'react';
import Button from './Button';

interface TabProps {
    label: string;
    onClick: () => void;
  }
  
  const Tab: React.FC<TabProps> = ({ label, onClick }) => {
    
    return (
        <Button variant="text" size="small" onClick={onClick}>
            {label}
        </Button>
        );
  };
  
  interface TabBarProps {
    labels: string[];
  }
  
  const TabBar: React.FC<TabBarProps> = ({ labels }) => {
    // State to manage the active tab index
    const [activeTab, setActiveTab] = useState(0);
  
    // Function to handle tab click, updating the active tab index
    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
  
    return (
      <div className="flex gap-4">
        {labels.map((label, index) => (
          <Tab
            key={index}
            label={label}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
    );
  };

  export default TabBar;
  