type ContactItemProps = {
  icon: React.ComponentType<JSX.IntrinsicElements['svg']>
} & JSX.IntrinsicElements['a']

export default function ContactItem({icon: Icon, ...props}: ContactItemProps) {
  return (
    <a
      {...props}
      className="mx-3 cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 fill-green-200 dark:fill-green-300" />
    </a>
  )
}
