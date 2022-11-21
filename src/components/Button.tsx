import clsx from 'clsx'

type ButtonProps = {
  variant?: 'default' | 'outlined'
  children: React.ReactNode
} & JSX.IntrinsicElements['a']

export default function Button({
  variant = 'default',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={clsx(
        className,
        'inline-block min-w-[100px] cursor-pointer border-2 bg-green-200 py-1 px-4 text-center font-mono text-lg font-bold text-gray-200 hover:bg-green-100 dark:bg-green-300',
        'hover:border-gray-200 hover:bg-green-100 dark:hover:bg-green-100',
        {
          'border-gray-200': variant === 'outlined',
        }
      )}
      {...props}
    >
      {children}
    </a>
  )
}
