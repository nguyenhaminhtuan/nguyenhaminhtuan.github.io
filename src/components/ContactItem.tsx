type ContactItemProps = {
  icon: React.ComponentType<JSX.IntrinsicElements['svg']>
  href: string
}

export default function ContactItem({icon: Icon, href}: ContactItemProps) {
  return (
    <a
      className="mx-3 cursor-pointer"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="h-6 w-6 fill-green-200 dark:fill-green-300" />
    </a>
  )
}
