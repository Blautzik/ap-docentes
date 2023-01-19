
import SelectorLink from "./selector-link"


const SelectorLinks = ({posts}) => {
  return (
    <div className='top-25 z-index-10 bg-white left-50  '>
        {posts.map((post) => <SelectorLink
          key={post.slug}
          title={post.title}
          slug={post.slug}
        />
        )}
    </div>
  )
}

export default SelectorLinks