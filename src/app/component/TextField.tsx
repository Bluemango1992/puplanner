type TextFieldProps = {
    placeholder: string;
    type: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'filled';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    id?: string;
}


const TextField = ({ 
    placeholder = 'Enter text',
    type = 'text',
    fullWidth = false,
    variant = 'filled',
    value,
    onChange,
    error,
    helperText,
    id
}: TextFieldProps) => {
    return (
        <div className={`flex flex-col gap-1 w-full`}>
            <input 
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`p-2 rounded-md ${fullWidth ? 'w-full' : ''} ${variant === 'outlined' ? 'border-2 border-gray-300' : 'bg-gray-100'}`}
            />
            {error && <span className='text-red-500 text-sm'>{helperText}</span>}
        </div>
    )
}

export default TextField;