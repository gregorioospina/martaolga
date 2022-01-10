import React, { useEffect, useState } from "react";
import BlogDetail from "./components/BlogDetail";
import BlogsMenu from "./components/BlogsMenu";
import useBlogs from "./hooks/useBlogs";

interface IBlog {}

const Blog = (props: IBlog) => {
  const [blogIndex, setBlogIndex] = useState<number | undefined>(undefined);
  const { blogs } = useBlogs();

  return blogIndex === undefined ? (
    <BlogsMenu blogs={blogs} setBlogIndex={setBlogIndex} />
  ) : (
    <BlogDetail
      blog={blogs[blogIndex]}
      index={blogIndex}
      setBlogIndex={(i: number | undefined) => setBlogIndex(i)}
      amountBlogs={blogs.length}
    />
  );
};
export default Blog;
