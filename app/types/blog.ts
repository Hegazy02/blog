import { Slug } from "sanity";

export type Blog = {
  title: string;
  slug: Slug;
  _id: string;
  _createdAt: string;
  author: {
    _id: string;
    username: string;
    image: string;
    bio: string;
  };
  views: number;
  description: string;
  category: string;
  image: string;
};
