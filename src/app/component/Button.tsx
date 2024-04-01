
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text' | 'outlined';
  size?: 'big' | 'medium' | 'small';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'medium',
  onClick,
  children,
  disabled,
  type = 'button',
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
  };

  // Combine all relevant classes
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} font-medium rounded cursor-pointer`;

  return (
    
    <button className={classes} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
