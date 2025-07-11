import React from "react";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div
      dir="rtl"
      className=" bg-white border-4 border-black rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="p-5">
        <div className="flex justify-between p-2">
          <div className="flex space-x-2">
            <EyeIcon color="#ef2a69" />
            <p className="font-bold">{blog.views} </p>
          </div>
          <p>{new Date(blog._createdAt).toLocaleDateString()}</p>
        </div>
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title.length > 35
              ? blog.title.slice(0, 35) + "..."
              : blog.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {blog.description.length > 100
            ? blog.description.slice(0, 100) + "..."
            : blog.description}
        </p>
        <Link href="#">
          <img
            src={blog.image}
            alt="image"
            className="h-40 w-full rounded-xl"
          />
        </Link>
        <div className="flex justify-between items-center mt-4 ">
          <Link href={"/?query=" + blog.category}>
            <p className="font-bold">{blog.category}</p>
          </Link>
          <Link
            href={`/blogs/${blog._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-3xl focus:ring-4 focus:outline-none hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
