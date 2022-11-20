type SectionHeaderTextProps = {
  children: React.ReactNode
}

export default function SectionHeaderText({children}: SectionHeaderTextProps) {
  return (
    <h2 className="mb-8 text-center font-mono text-3xl font-bold text-green-200 underline dark:text-green-300 md:text-4xl">
      {children}
    </h2>
  )
}
