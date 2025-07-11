import SearchForm from "@/components/SearchForm";
import BlogCard from "@/components/BlogCard";
import { BLOG_QUERY } from "@/sanity/lib/queries";
import { Blog } from "../types/blog";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: blogs }: { data: Blog[] } = await sanityFetch({
    query: BLOG_QUERY,
    params,
  });
  return (
    <>
      <section className="bg-[#ef2a69] flex flex-col justify-center items-center gap-5 py-10">
        <h1 className="heading">Create your own blog</h1>
        <p className="text-white text-center text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="p-4 ">
        <h3 className="text-2xl font-bold mb-2">
          {query ? `Search results for "${query}"` : "All Blogs"}
        </h3>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug.current} blog={blog} />
          ))}
        </div>
      </section>
      <SanityLive />
    </>
  );
}
