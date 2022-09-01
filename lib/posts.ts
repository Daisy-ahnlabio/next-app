import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // /posts 파일 이름 잡아주기
  const fileNames = fs.readdirSync(postsDirectory);
  console.log("fileNames", fileNames);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { data: string; title: string }),
    };
  });
  //sorting
  return allPostsData.sort((a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function aetAllPoSTiDS() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fifleName) => {
    return {
      params: {
        id: fileNames.replace(/\.md$/, ""),
      },
    };
  });
}
