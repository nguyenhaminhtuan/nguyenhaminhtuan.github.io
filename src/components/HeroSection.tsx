import VietnamFlagIcon from './icons/VietnamFlag'

export default function HeroSection() {
  return (
    <section id="about-me" className="mx-auto mt-3 max-w-3xl md:mt-5">
      <div className="border-4 border-green-200 bg-gray-100 p-2 font-mono text-sm text-green-200 dark:border-green-300 md:text-base">
        <p className="md:animate-typing md:overflow-hidden md:whitespace-nowrap">
          {'>'} Hi 👋 My name is <b>Tuan</b>. I'm a web developer from{' '}
          <b>Vietnam</b> <VietnamFlagIcon className="inline h-4 w-6" />
        </p>
      </div>
      <img
        className="mx-auto my-8 block h-32 w-32 md:my-12 md:h-44 md:w-44"
        src="/images/avatar.jpeg"
        alt="Handsome boy"
      />
      <div className="text-center text-base font-medium md:text-lg">
        I love building websites, applications with better perfomance as well as
        enhanced experience. I have 2+ years of experiences in Front-end
        development with ReactJS and Back-end with NodeJS but I'm not stuck in
        with Javascript stack and able to write code in C# or Java.
      </div>
    </section>
  )
}
