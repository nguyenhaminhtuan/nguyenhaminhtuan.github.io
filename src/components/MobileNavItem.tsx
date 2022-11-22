import {isNavbarOpen} from '@utils/store'
import clsx from 'clsx'
import ChevronRightIcon from './icons/ChevronRight'

type MobileNavItemProps = {
  name: string
  href: string
  isFirstLast?: boolean
}

export default function MobileNavItem({
  href,
  name,
  isFirstLast = false,
}: MobileNavItemProps) {
  return (
    <li
      className={clsx(
        'cursor-pointer  border-b border-green-200 py-5 px-3 font-mono text-sm font-bold',
        {
          'text-green-200 hover:text-white-100': !isFirstLast,
          'text-white-100 hover:text-green-200': isFirstLast,
        }
      )}
    >
      <a
        className="flex justify-between"
        href={href}
        onClick={() => isNavbarOpen.set(false)}
      >
        <span>{name}</span>
        <ChevronRightIcon className="h-4 w-4 fill-green-200" />
      </a>
    </li>
  )
}
