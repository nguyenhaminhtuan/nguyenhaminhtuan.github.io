import clsx from 'clsx'

type WorkCardProps = {
  jobTitle: string
  time: string
  description: string[]
  visible?: boolean
}

export default function WorkCard({
  jobTitle,
  time,
  description,
  visible = true,
}: WorkCardProps) {
  return (
    <div className={clsx({block: visible, hidden: !visible})}>
      <div className="font-sans text-base font-bold md:text-lg">{jobTitle}</div>
      <div className="font-mono text-xs text-gray-600 dark:text-gray-400 md:text-sm">
        {time}
      </div>
      <ul className="mt-3 list-disc pl-4 text-sm font-medium md:pl-0">
        {description.map((d, i) => (
          <li className="mt-3" key={i}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}
