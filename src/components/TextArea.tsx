import clsx from 'clsx'

type TextAreaProps = {} & JSX.IntrinsicElements['textarea']

export default function TextArea({className, ...props}: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        className,
        'w-full resize-none rounded-sm border-none bg-gray-200 px-3 py-1.5 font-sans text-[15px] font-bold tracking-[4px] text-green-200 placeholder-green-300 outline-0',
        'ring-green-200 focus:ring-4 dark:ring-green-300'
      )}
    />
  )
}
