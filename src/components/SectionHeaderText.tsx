function HorizontalLine() {
  return <hr className="h-[3px] flex-1 border-0 bg-gray-100" />
}

type SectionHeaderTextProps = {
  children: React.ReactNode
}

export default function SectionHeaderText({children}: SectionHeaderTextProps) {
  return (
    <div className="flex w-full items-center">
      <HorizontalLine />
      <h2 className="mx-4 cursor-default break-words bg-grad bg-[length:100%_200%] bg-[0px_0px] font-mono text-2xl font-bold uppercase transition-all duration-150 ease-in-out hover:bg-grad-hover hover:bg-[0px_100%] dark:hover:text-gray-200 md:mx-8 md:text-3xl">
        {children}
      </h2>
      <HorizontalLine />
    </div>
  )
}
