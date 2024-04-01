type TextAreaProps = {
    placeholder: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'filled';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    id?: string;
    label?: string;
}

const TextArea = ({
    placeholder = 'Enter text',
    fullWidth = false,
    variant = 'filled',
    value,
    onChange,
    error,
    helperText,
    id,
    label
}: TextAreaProps) => {
    return (
        <div className='flex flex-col gap-1 h-24 w-full'>
          {label && <label className='text-sm' htmlFor={id}>{label}</label>}
          <div className="flex-1 flex flex-col">
            <input
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`p-2 rounded-md ${fullWidth ? 'w-full' : ''} ${variant === 'outlined' ? 'border-2 border-gray-300' : 'bg-gray-100'}`}
            />
          </div>
          {error && <span className='text-red-500 text-sm'>{helperText}</span>}
        </div>
      )
}

export default TextArea;