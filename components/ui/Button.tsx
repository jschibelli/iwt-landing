import { cva, VariantProps } from 'class-variance-authority';
// import { Spinner } from './Spinner'; // Optional: create a spinner component

const button = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-primary',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-brand-secondary',
        secondary: 'bg-brand-secondary text-white hover:bg-brand-primary',
        outline: 'border border-brand-primary text-brand-primary bg-white hover:bg-brand-primary hover:text-white',
        text: 'bg-transparent text-brand-primary hover:underline',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-base',
        lg: 'px-7 py-3 text-lg',
      },
      loading: {
        true: 'opacity-60 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant,
  size,
  loading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ variant, size, loading })}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...props}
    >
      {/* {loading && <Spinner className="mr-2" />} */}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
} 