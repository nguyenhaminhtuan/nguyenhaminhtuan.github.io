import {isNavbarOpen} from '@utils/store'
import Button from './Button'
import DesktopNavbar from './DesktopNavbar'
import HamburgerIcon from './icons/Hamburger'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'
import ThemeToogler from './ThemeToogler'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="bg-green-200 px-3 dark:bg-green-300">
        <div className="container flex h-header items-center justify-between">
          <HamburgerIcon
            className="h-8 w-8 cursor-pointer fill-green-400 md:hidden"
            onClick={() => isNavbarOpen.set(true)}
          />
          <Logo />
          <div className="flex items-center">
            <div className="hidden md:block">
              <Button href="#contact" className="md:mr-9" variant="outlined">
                Get in touch
              </Button>
            </div>
            <ThemeToogler />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </header>
  )
}
