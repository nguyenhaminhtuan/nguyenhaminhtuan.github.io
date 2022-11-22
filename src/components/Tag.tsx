type TagProps = {
  text: string
}

export default function Tag({text}: TagProps) {
  return (
    <div className="bg-green-400 px-2 py-1 text-xs font-medium text-white-100 md:text-sm">
      {text}
    </div>
  )
}
