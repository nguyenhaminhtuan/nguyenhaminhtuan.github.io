function HorizontalLine() {
  return (
    <hr className="h-[3px] flex-1 border-0 bg-green-200 dark:bg-green-300" />
  )
}

type SectionHeaderTextProps = {
  children: React.ReactNode
}

export default function SectionHeaderText({children}: SectionHeaderTextProps) {
  return (
    <div className="flex w-full items-center">
      <HorizontalLine />
      <h2 className="mx-2 bg-green-400 py-1 px-2 text-center font-mono text-xl font-bold text-green-200 dark:text-green-300 md:mx-6 md:py-2 md:px-4 md:text-3xl">
        {children}
      </h2>
      <HorizontalLine />
    </div>
  )
}
