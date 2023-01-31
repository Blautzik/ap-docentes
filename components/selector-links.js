import SelectorLink from "./selector-link";

const SelectorLinks = ({ posts }) => {
  return (
    <div
      className="absolute left-96 top-80 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      {posts.map((post) => (
        <SelectorLink key={post.slug} title={post.title} slug={post.slug} />
      ))}
    </div>
  );
};

export default SelectorLinks;
