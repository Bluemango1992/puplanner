'use client';

import { useRouter } from 'next/navigation';
import { TextField, Button } from '../../component';
import BookMeetandGreet from '../../api/BookMeetandGreet';
import { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import './AutosuggestStyles.css';
import { debounce } from 'lodash';


let address = '';

type Suggestion = {
    display_name: string;
};

const searchAddress = async (searchText: string): Promise<Suggestion[]> => {
    // Add the `countrycodes` parameter set to `gb` for the UK
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=gb&q=${searchText}`);
    const data = await response.json();
    return data; // Return the search results
};

const getSuggestionValue = suggestion => suggestion.display_name; // Function to transform a suggestion into a string

const renderSuggestion = suggestion => (
    <div>
        {suggestion.display_name}
    </div>
);


interface ContactDetailsFormProps {
    user: any;
    date: any;
}

const ContactDetailsForm = ({ user, date }: ContactDetailsFormProps) => {

    const router = useRouter();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phone, setPhone] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [address, setAddress] = useState('');

    

    const debouncedSearchAddress = debounce(async (value) => {
        if (!value) {
            setSuggestions([]);
            return;
        }
        const results = await searchAddress(value);
        setSuggestions(results);
    }, 500); // 500 ms delay

    const onAddressChange = (event, { newValue }) => {
        setAddress(newValue);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        debouncedSearchAddress(value);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    useEffect(() => {
        if (address) {
            debouncedSearchAddress(address);
        } else {
            setSuggestions([]);
        }
    }, [address]);

    const inputProps = {
        placeholder: "Type your address",
        value: address,
        onChange: onAddressChange
    };

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [addressError, setAddressError] = useState(false);

    const validateForm = () => {
        let isValid = true;
        setNameError(!firstName);
        setNameError(!lastName);
        setPhoneError(!phone);
        setAddressError(!address);

        if (!firstName || !lastName || !phone || !address) {
            isValid = false;
        }
        return isValid;
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!user) {
            console.error('User is not authenticated.');
            return;
        }
        if (!date) {
            console.error('Date is not selected.');
            return;
        }
        if (validateForm()) {
            console.log('Submitting form...');
            const formData = {
                id: user.id, // Assuming this comes from authentication context
                firstName,
                lastName,
                phone,
                address
                // Include other form data as needed
            };
            await BookMeetandGreet(formData);
            router.push('/meet-and-greet/confirm');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full'>
                <TextField
                error={nameError}
                helperText={nameError ? 'Please enter your first name' : ''}
                label='First Name'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                />
                <TextField
                error={nameError}
                helperText={nameError ? 'Please enter your last name' : ''}
                label='Last Name'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                />
                <TextField
                error={phoneError}
                helperText={phoneError ? 'Please enter your phone number' : ''}
                label='Phone'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                
                <label htmlFor="address">Address</label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    theme={{
                        container: 'autosuggestContainer',
                        input: 'autosuggestInput',
                        suggestionsContainer: 'suggestionsContainer',
                        suggestion: 'suggestionItem',
                        suggestionHighlighted: 'suggestionItem--highlighted'
                    }}
                />
      

            <div className='flex justify-between mt-4'>
                <Button variant='text' onClick={() => router.back()}>
                    Back
                </Button>
                <Button type='submit' variant='secondary'>
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ContactDetailsForm;
