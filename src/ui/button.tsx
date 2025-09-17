import React from 'react'

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-500',
  destructive: 'bg-red-600 text-white hover:bg-red-500',
  outline: 'border border-gray-300 bg-white text-black hover:bg-gray-100',
  secondary: 'bg-gray-600 text-white hover:bg-gray-500',
  ghost: 'bg-transparent text-black hover:bg-gray-100',
  link: 'text-blue-600 underline hover:text-blue-800',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 text-sm',
  sm: 'h-8 px-3 text-sm',
  lg: 'h-10 px-6 text-base',
  icon: 'h-9 w-9 flex items-center justify-center',
}

function Button({
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2'

  const finalClassName = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  return <button className={finalClassName} {...props} />
}

export default Button
