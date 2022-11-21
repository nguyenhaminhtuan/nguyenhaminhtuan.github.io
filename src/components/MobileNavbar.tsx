import clsx from 'clsx'
import {useStore} from '@nanostores/react'
import {isNavbarOpen} from '@utils/store'
import links from '@utils/links'
import XMarkIcon from './icons/XMark'
import MobileNavItem from './MobileNavItem'

export default function MobileNavbar() {
  const $isNavbarOpen = useStore(isNavbarOpen)

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 w-full overflow-hidden bg-green-400 text-green-200 opacity-[0.98] transition-[height] duration-200',
        {
          'h-full': $isNavbarOpen,
          'h-0': !$isNavbarOpen,
        }
      )}
    >
      <XMarkIcon
        className="my-2 ml-2 h-10 w-10 cursor-pointer fill-green-200"
        onClick={() => isNavbarOpen.set(false)}
      />
      <ul>
        {links.map((l, i) => (
          <MobileNavItem
            key={i}
            name={l.name}
            href={l.href}
            isFirstLast={i === 0 || i === links.length - 1}
          />
        ))}
      </ul>
    </div>
  )
}
