import React from 'react';
import Typography from '../Typography/typograph';

interface ListItemProps {
    title: string;
    caption?: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, caption }) => {
    return (
        <div className="flex flex-col px-4 py-2">
            <Typography variant="caption">{title}</Typography>
            <Typography variant="subtitle2">{caption}</Typography>
        </div>
    );
};

export default ListItem;
