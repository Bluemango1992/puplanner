'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Divider, Paper, Box, Navbar } from '../../component';
import Link from 'next/link';
import Typography from '../../Typography/typograph';
import { useRouter } from 'next/navigation'; // Adjusted import for use within the `app` directory or specific Next.js contexts



export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);


    const router = useRouter(); 

   type Errors = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    };

    const validateForm = () => {
        let tempErrors = {} as Errors;
        tempErrors.firstName = firstName ? '' : 'First name is required';
        tempErrors.lastName = lastName ? '' : 'Last name is required';
        tempErrors.email = email ? '' : 'Email is required';
        tempErrors.password = password ? '' : 'Password is required';
        setErrors(tempErrors);
        // Form is valid if there are no messages in tempErrors
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const formdata = {
                firstName,
                lastName,
                email,
                password,
            };
            console.log(formdata);
            
            router.push('/onboarding');
        } else {
            console.error('Please fill in all fields.');
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowPassword(e.target.checked);
    }

    return (
        <>
        <Navbar />
        <Container>
            <div className='flex gap-6 align-center justify-center h-full'>
                <Box align='center' items='start' className='flex-1 flex-col'>
                <Typography variant="h1">Welcome to Puplanner - Your Partner in Pet Care!</Typography>
                <Typography variant="caption">Join us for a seamless experience in managing your dog's walks. With Puplanner, enjoy convenience, trusted walkers, and smart scheduling at your fingertips. Sign up today for happier walks and a happier pup!</Typography>
                </Box>
            <div className="flex flex-col items-center w-1/2 gap-6">
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
                <TextField 
                    placeholder="First Name" 
                    fullWidth
                    variant="outlined" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    size='small'
                />
                <TextField 
                    placeholder="Last Name" 
                    fullWidth 
                    variant="outlined" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    size='small'
                />
                <TextField 
                    placeholder="Email" 
                    fullWidth 
                    variant="outlined" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    error={!!errors.email}
                    helperText={errors.email}
                    size='small'
                />
                <TextField
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                size='small'
            />
            <div className="flex flex-1 justify-end items-center gap-2">
                <input
                    type="checkbox"
                    id="show-password"
                    name="show-password"
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="show-password">Show Password</label>
            </div>
                        <button type="submit" className="bg-orange-900 hover:bg-orange-700 text-orange-50 py-3 px-4 rounded">Sign Up</button>
                </form>
                    <Typography variant="subtitle2">By signing up, you agree to our Terms of Service and Privacy Policy</Typography>
                <Divider />
                <Link href="/login">
                <Button variant="text">I have an account. Sign in!</Button>
                </Link>
            </div>
            </div>
        </Container>
        </>
    );
}