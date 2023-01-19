import Link from "next/link"

const SelectorLink = ({slug, title}) => {
  return (
    
  <div>
    <Link href={`/posts/${slug}`} className="hover:underline relative">
      {title}
    </Link>
  </div>
  )
}

export default SelectorLink