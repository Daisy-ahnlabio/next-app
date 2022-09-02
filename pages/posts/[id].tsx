import { GetStaticPaths, GetStaticProps } from "next";
import { getMaxAge } from "next/dist/server/image-optimizer";
import Head from "next/head";
import React from "react";
import {
  getSortedPostsData,
  getAllPostIds,
  getPostsData,
} from "../../lib/posts";
import postStyle from "../../styles/Post.module.css";

function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <div className={postStyle.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </div>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostsData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
