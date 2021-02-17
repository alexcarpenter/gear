import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

const root = process.cwd();

export async function getContentByType(type) {
  const content = fs
    .readdirSync(path.join(root, "content", type))
    .map((file) => {
      const source = fs.readFileSync(
        path.join(root, "content", type, file),
        "utf8",
      );
      const { data } = matter(source);
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        type,
        title: data.title,
      };
    });

  return content;
}
