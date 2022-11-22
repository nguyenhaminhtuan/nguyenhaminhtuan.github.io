import {isNavbarOpen} from '@utils/store'
import HamburgerIcon from './icons/Hamburger'

export default function MenuNavbarButton() {
  return (
    <HamburgerIcon
      className="h-8 w-8 cursor-pointer fill-green-400 md:hidden"
      onClick={() => isNavbarOpen.set(true)}
    />
  )
}
