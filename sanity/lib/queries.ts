import { defineQuery } from "next-sanity";

export const BLOG_QUERY =
  defineQuery(`*[_type=="blog" &&defined(_id) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
    author -> {
      _id,username,image,bio
    },
    views,
    description,
    category,
    image
}`);

export const BLOG_QUERY_BY_SLUG = defineQuery(`*[_type=="blog" && _id==$id][0] {
  _id,title,slug,_createdAt,
    author -> {_id,username,image,bio},
    views,description,category,image,pitch
}`);
export const STARTUP_VIEWS_QUERY = defineQuery(
  `*[_type == "blog" && _id == $id][0]{
    _id,
    views
  }`
);
