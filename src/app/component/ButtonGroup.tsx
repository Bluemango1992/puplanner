'use client';

import React, { useState } from 'react';
import Typography from '../Typography/typograph';

const ButtonGroup = ({
    title,
    content = ["low", "moderate", "medium", "high", "extreme"],
    onSelectionChange,
}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelection = (index) => {
        console.log(index); // This will log the index of the selected item
        setSelectedValue(index); // Update state with the index
        onSelectionChange(index); // Notify the parent component
    };

    return (
        <>
            <Button
                title={title}
                content={(
                    <div className="flex gap-1 items-center">
                        {content.map((value, index) => (
                            <button
                                key={index}
                                className={`flex flex-wrap py-3 w-full justify-center items-center text-sm rounded-md ${
                                    selectedValue === index // Compare with index
                                        ? 'bg-white text-gray-800'
                                        : 'bg-gray-200 text-gray-100'
                                }`}
                                onClick={() => handleSelection(index)} // Pass index on click
                            >
                                <Typography variant="body2">{value}</Typography>
                            </button>
                        ))}
                    </div>
                )}
            />
        </>
    );
};

export default ButtonGroup;

const Button = ({ title, content }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <Typography variant="subtitle1">{title}</Typography>
            {content}
        </div>
    );
}
