import clsx from 'clsx'

type InputProps = {} & JSX.IntrinsicElements['input']

export default function Input({className, ...props}: InputProps) {
  return (
    <input
      {...props}
      className={clsx(
        className,
        'w-full rounded-sm border-none bg-gray-200 px-3 py-1.5 font-sans text-[15px] font-bold tracking-[4px] text-green-200 placeholder-green-300 outline-0',
        'ring-green-200 focus:ring-4 disabled:cursor-wait disabled:bg-gray-50 dark:ring-green-300'
      )}
    />
  )
}
