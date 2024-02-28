import React from 'react';
import Typography from '../Typography/typograph';

interface ListItemProps {
    title: string;
    caption?: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, caption }) => {
    return (
        <div>
            <Typography variant="caption">{title}</Typography>
            <Typography variant="h5">{caption}</Typography>
        </div>
    );
};

export default ListItem;
