
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text' | 'outlined';
  size?: 'big' | 'medium' | 'small' | 'full';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'medium',
  onClick,
  children,
  disabled,
}) => {
  // Tailwind classes for variants using default colors
  const variantClasses = {
    primary: 'bg-orange-900 text-orange-100 hover:bg-orange-800',
    secondary: 'bg-orange-500 text-orange-100 hover:bg-orange-400',
    text: 'text-orange-400 bg-transparent text-orange-900 hover:bg-orange-50',
    outlined: 'border-2 border-orange-900 text-orange-900 hover:bg-orange-50',
  };

  // Tailwind classes for sizes
  const sizeClasses = {
    big: 'px-8 py-4 text-lg',
    medium: 'px-6 py-2 text-md',
    small: 'px-4 py-1 text-sm',
    full: 'w-full px-8 py-2 text-md',
  };

  // Combine all relevant classes
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} font-medium rounded cursor-pointer min-w-[100px]`;

  return (
    
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
