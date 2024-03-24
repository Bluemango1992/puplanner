import React from 'react';
import Typography from '../Typography/typograph';

interface ListItemProps {
    title: string;
    caption?: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, caption }) => {
    return (
        <div className="flex flex-col px-4 py-2">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption">{caption}</Typography>
        </div>
    );
};

export default ListItem;
