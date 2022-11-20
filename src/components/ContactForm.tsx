import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

function FormControl({children}: {children: React.ReactNode}) {
  return <div className="mt-4">{children}</div>
}

function Label({text}: {text: string}) {
  return (
    <label className="font-hackernoon text-base text-green-200 dark:text-green-300 sm:text-lg">
      {text}
    </label>
  )
}

export default function ContactForm() {
  return (
    <div className="border-t-[7px] border-green-200 bg-gray-100 py-12 dark:border-green-300">
      <form
        id="contact"
        className="mx-auto block max-w-full px-2 md:max-w-[600px]"
      >
        <div className="mb-10 text-center font-hackernoon text-3xl font-bold text-green-200 dark:text-green-300 sm:text-4xl">
          GET IN TOUCH
        </div>
        <FormControl>
          <Label text="Email" />
          <Input
            className="mt-1"
            type="email"
            placeholder="📭 Your@email.com"
          />
        </FormControl>
        <FormControl>
          <Label text="Subject" />
          <Input className="mt-1" type="text" placeholder="👋 Just saying hi" />
        </FormControl>
        <FormControl>
          <Label text="Message" />
          <TextArea className="mt-1" rows={8} placeholder="✨ Hi there" />
        </FormControl>
        <div className="mt-5 text-center">
          <Button>🚀 Send me</Button>
        </div>
      </form>
    </div>
  )
}
