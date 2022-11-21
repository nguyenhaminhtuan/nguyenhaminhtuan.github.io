import EnvelopIcon from './icons/Envelop'
import FacebookIcon from './icons/Facebook'
import GithubIcon from './icons/Github'
import LinkedinIcon from './icons/Linkedin'
import ContactItem from './ContactItem'

export default function Footer() {
  return (
    <footer className="border-t-[7px] border-green-200 bg-green-400 py-8 text-center text-green-200 dark:border-green-300 dark:text-green-300">
      <div className="mb-6 flex justify-center">
        <ContactItem
          icon={EnvelopIcon}
          href="mailto:nguyenhaminhtuan.dev@gmail.com"
        />
        <ContactItem
          icon={GithubIcon}
          href="https://github.com/nguyenhaminhtuan"
        />
        <ContactItem
          icon={FacebookIcon}
          href="https://www.facebook.com/minhtuan.nguyen.1997"
        />
        <ContactItem icon={LinkedinIcon} href="#" />
      </div>
      <b className="font-mono">
        Nguyen Ha Minh Tuan | {new Date().getFullYear()}
      </b>
      <p className="mt-4 font-sans">
        Hosted by{' '}
        <b>
          <u>Github Pages</u>
        </b>
      </p>
    </footer>
  )
}
