'use client';

import React from 'react';
import Typography from "../Typography/typograph";
import { Paper, Button } from "../component";

type CardProps = {
    title : string;
    description? : string;
    primaryButton? : string;
    secondaryButton? : string;
    tertiaryButton? : string;
    children : React.ReactNode;
}


const Page: React.FC<CardProps> = ({
    title = "Hello World",
    description = "Description here",
    primaryButton = "Primary",
    secondaryButton = "Secondary",
    tertiaryButton = "Tertiary",
    children = "Hello World"
}) => {
    return (
        <Paper>
            <div className='md:max-w-[744px]'>
                <Header {...{ title, description }} />
                <Placeholder>
                    {children}
                </Placeholder>
                {/* Using the spread operator to pass props */}
                <Footer {...{ primaryButton, secondaryButton, tertiaryButton, primaryClick: () => {console.log('Primary Clicked')}, secondaryClick: () => {console.log('Secondary Clicked')}, tertiaryClick: () => {console.log('Tertiary Clicked')}}} />
            </div>
        </Paper>
    )
}

export default Page;

type  Header = {
    title : string;
    description : string;
}

const Header: React.FC<Header> = ({
    title = "Hello World",
    description = "Description here"
}) => {
    return (
            <div className='p-4'>
                <Typography variant='h1'>{title}</Typography>
                <Typography variant='body1'>{description}</Typography>
            </div>
    );
}

type FooterProps = {
    primaryButton : string;
    secondaryButton : string;
    tertiaryButton : string;
    primaryClick : () => void;
    secondaryClick : () => void;
    tertiaryClick : () => void;
}


const Footer: React.FC<FooterProps> = ({
    primaryButton = "Primary", 
    secondaryButton = "Secondary", 
    tertiaryButton = "Tertiary",
    primaryClick = () => {'Primary Clicked'},
    secondaryClick = () => {'Secondary Clicked'},
    tertiaryClick = () => {'Tertiary Clicked'}
}) => {
    return (
        <div className='flex p-4 gap-4'>
            <Button variant="primary" onClick={primaryClick}>{primaryButton}</Button>
            <Button variant="secondary" onClick={secondaryClick}>{secondaryButton}</Button>
            <Button variant="text" onClick={tertiaryClick}>{tertiaryButton}</Button>
        </div>
    );
}

type Placeholder = {
   children : React.ReactNode;
}

const Placeholder: React.FC<Placeholder> = ({ children }) => {
    return (
        <div className='p-4'>
            {children}
        </div>
    );
};


