import {useEffect, useState} from 'react'
import ButtonBase from './ButtonBase'
import Input from './Input'
import TextArea from './TextArea'

type StateMachine = 'idle' | 'loading' | 'fullfilled' | 'rejected'

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

const initialFormData = {
  from: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState('')
  const [state, setState] = useState<StateMachine>('idle')

  const handleOnchange: React.ChangeEventHandler<
    HTMLInputElement & HTMLTextAreaElement
  > = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    setState('loading')
    const res = await fetch(
      'https://portfolio-contact.nguyenhaminhtuan1997.workers.dev',
      {method: 'POST', body: JSON.stringify(formData)}
    )
    if (res.status >= 400) {
      setState('rejected')
      if (res.status >= 500) {
        return setError(
          'An error occurred, your contact information has not been sent.'
        )
      }

      return setError('You provide an invalid information')
    }

    setState('fullfilled')
  }

  useEffect(() => {
    if (state === 'fullfilled' || state === 'rejected') {
      const timer = setTimeout(
        () => {
          state === 'rejected' && setError('')
          state === 'fullfilled' && setFormData(initialFormData)
          setState('idle')
        },
        state === 'fullfilled' ? 500 : 2000
      )

      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <div className="border-t-[7px] border-green-200 bg-gray-100 py-12 dark:border-green-300">
      <form
        id="contact"
        className="mx-auto block max-w-full px-2 md:max-w-[600px]"
      >
        <h2 className="mb-10 text-center font-hackernoon text-3xl font-bold text-green-200 dark:text-green-300 sm:text-4xl">
          GET IN TOUCH
        </h2>
        <FormControl>
          <Label text="Email" />
          <Input
            className="mt-1"
            type="email"
            name="from"
            placeholder="📭 Your@email.com"
            disabled={state !== 'idle'}
            value={formData.from}
            onChange={handleOnchange}
          />
        </FormControl>
        <FormControl>
          <Label text="Subject" />
          <Input
            className="mt-1"
            type="text"
            name="subject"
            placeholder="👋 Just saying hi"
            disabled={state !== 'idle'}
            value={formData.subject}
            onChange={handleOnchange}
          />
        </FormControl>
        <FormControl>
          <Label text="Message" />
          <TextArea
            className="mt-1"
            rows={8}
            name="message"
            placeholder="✨ Hi there"
            disabled={state !== 'idle'}
            value={formData.message}
            onChange={handleOnchange}
          />
        </FormControl>
        <div className="mt-2 text-center font-mono text-red-500">{error}</div>
        <div className="mt-5 text-center">
          <ButtonBase disabled={state !== 'idle'} onClick={handleSubmit}>
            🚀 Send me
          </ButtonBase>
        </div>
      </form>
    </div>
  )
}
