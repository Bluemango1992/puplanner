'use client';

import Typography from "../../Typography/typograph";
import { Paper, Button } from "../../component";
import React from "react";

type CardProps = {
    title: string;
    description?: string;
    primaryButton?: string;
    secondaryButton?: string;
    tertiaryButton?: string;
    children: React.ReactNode;
    showBackground: boolean;
    primaryClick?: React.ReactNode; 
    secondaryClick?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
    title = "Hello World",
    description,
    primaryButton,
    primaryClick = () => console.log('Primary Clicked'),
    secondaryButton,
    secondaryClick = () => console.log('Secondary Clicked'),
    children,
    showBackground = true,
}) => {
    // You can define a conditional wrapper or className based on showBackground
    const Wrapper = showBackground ? Paper : React.Fragment;
    const wrapperProps = showBackground ? { className: 'max-w-[744px]' } : {};

    return (
        <Wrapper {...wrapperProps}>
            <div className={!showBackground ? 'max-w-[744px]' : ''}>
                <Header {...{ title, description }} />
                {children && (
                    <Placeholder>
                        {children}
                    </Placeholder>
                )}
                {(primaryButton || secondaryButton ) && (
                    <Footer {...{ primaryButton, secondaryButton, primaryClick: () => { primaryClick }, secondaryClick: () => { secondaryClick } }} />
                )}
            </div>
        </Wrapper>
    );
}

export default Card;

// Header and Footer components remain unchanged

const Header: React.FC<{ title?: string; description?: string; }> = ({
    title,
    description
}) => (
    <div className='p-4'>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='body1'>{description}</Typography>
    </div>
);

const Footer: React.FC<{
    primaryButton?: string;
    secondaryButton?: string;
    primaryClick?: () => void;
    secondaryClick?: () => void;
}> = ({
    primaryButton, 
    secondaryButton, 
    primaryClick = () => console.log('Primary Clicked'),
    secondaryClick = () => console.log('Secondary Clicked'),
}) => (
    <div className='flex p-4 gap-4'>
        {primaryButton && <Button variant="primary" onClick={primaryClick}>{primaryButton}</Button>}
        {secondaryButton && <Button variant="text" onClick={secondaryClick}>{secondaryButton}</Button>}
    </div>
);

const Placeholder: React.FC<{ children: React.ReactNode; }> = ({ children }) => (
    <div className='p-4'>
        {children}
    </div>
);
