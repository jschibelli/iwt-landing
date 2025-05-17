import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: string;
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const spacingMap = {
  sm: 'py-8',
  md: 'py-16',
  lg: 'py-24',
};

export function Section({
  children,
  background = 'bg-white',
  spacing = 'md',
  className = '',
}: SectionProps) {
  return (
    <section className={`${background} ${spacingMap[spacing]} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
} 