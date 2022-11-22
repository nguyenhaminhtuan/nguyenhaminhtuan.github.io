import clsx from 'clsx'
import GithubIcon from './icons/Github'

type GithubRepoLinkProps = {
  name: string
} & JSX.IntrinsicElements['a']

export default function GithubRepoLink({
  name,
  className,
  ...props
}: GithubRepoLinkProps) {
  return (
    <a
      {...props}
      className={clsx(
        className,
        'flex items-center gap-x-2 text-sm underline md:text-base'
      )}
      target="_blank"
      rel="noreferrer"
    >
      <GithubIcon className="h-6 w-6 dark:fill-white-100" />
      <b>{name}</b>
    </a>
  )
}
