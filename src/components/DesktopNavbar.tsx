import clsx from 'clsx'
import links from '@utils/links'

export default function DesktopNavbar() {
  return (
    <ul className="flex h-navbar items-center justify-center bg-green-400">
      {links.map((l, i) => (
        <li
          key={i}
          className={clsx('mx-5 cursor-pointer font-mono text-sm font-bold', {
            'text-white-100 hover:text-green-200 dark:hover:text-green-300':
              i !== 0 || i !== links.length - 1,
            'text-green-200 hover:text-white-100 dark:text-green-300':
              i === 0 || i === links.length - 1,
          })}
        >
          <a href={l.href}>{l.name}</a>
        </li>
      ))}
    </ul>
  )
}
