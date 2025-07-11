import { client } from "@/sanity/lib/client";
import React, { Suspense } from "react";
import { BLOG_QUERY_BY_SLUG } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Blog } from "../../../types/blog";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/view";
const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog: Blog = await client.fetch(BLOG_QUERY_BY_SLUG, { id });
  if (!blog) notFound();
  return (
    <div>
      <section className="bg-[#ef2a69] flex flex-col justify-center items-center gap-5 py-10">
        <p className="font-bold p-2 text-center text-xl bg-[#faea3c] ">
          {new Date(blog._createdAt).toLocaleDateString()}
        </p>
        <h1 className="heading">{blog.title}</h1>
      </section>
      <section className=" p-6">
        <img
          src={blog.image}
          alt="blog image"
          className="w-full h-120 rounded"
        />
        <div className="flex justify-between  mt-4">
          <div className="flex gap-4 items-center">
            <img
              src={blog.author.image}
              alt="author"
              className="h-12 w-12 rounded-full"
            />
            <p className=" text-center text-1xl font-bold">
              {blog.author.username}
            </p>
          </div>
          <p className="font-bold bg-pink-200 px-4 flex items-center rounded-3xl">
            {blog.category}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-6">Blog Details</h3>
          <p>{blog.description}</p>
        </div>
        {/* TODO: startups */}
        <Suspense fallback={<Skeleton className="mt-4 " />}>
          <View id={id} />
        </Suspense>
      </section>
    </div>
  );
};

export default BlogDetails;
