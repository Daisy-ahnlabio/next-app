import { getMaxAge } from "next/dist/server/image-optimizer";
import React from "react";

function Post() {
  return <div> Post </div>;
}

export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
};
