import Link from "next/link"

const SelectorLink = ({slug, title}) => {
  return (
    
  <div className="py-1">
    <Link href={`/posts/${slug}`} className="hover:underline relative p-5">
      {title}
    </Link>
  </div>
  )
}

export default SelectorLink