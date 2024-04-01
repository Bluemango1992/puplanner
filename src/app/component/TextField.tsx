type TextFieldProps = {
    placeholder: string;
    fullWidth?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    id?: string;
    label?: string;
}


const TextField = ({ 
    placeholder = 'Enter text',
    fullWidth = false,
    value,
    onChange,
    error,
    helperText,
    id,
    label
}: TextFieldProps) => {
    return (
        <div className={`flex flex-col gap-1 w-full mb-3`}>
            {label && <label className='text-sm' htmlFor={id}>{label}</label>}
            <input 
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            className={`border-2 p-2 rounded-md ${fullWidth ? 'w-full' : ''}`}
            />
            {error && <span className='text-red-500 text-sm'>{helperText}</span>}
        </div>
    )
}

export default TextField;