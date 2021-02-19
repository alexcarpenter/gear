import hydrate from "next-mdx-remote/hydrate";
import { getContentByType, getContentBySlug } from "@/lib/mdx";
import MDXComponents from "@/components/Mdx";
import Page from "@/components/Page";
import Separator from "@/components/Separator";
import SharePage from "@/components/SharePage";
import Tags from "@/components/Tags";

export default function Post({ frontMatter, source }) {
  const content = hydrate(source, { components: MDXComponents });
  const {
    slug,
    title,
    description,
    publishedOn,
    updatedOn,
    tags,
  } = frontMatter;
  return (
    <Page
      meta={{
        title,
        description,
      }}
    >
      <Page.Header>
        <Page.Title>{title}</Page.Title>
        <div className='mt-4 flex space-x-8 font-mono text-sm'>
          {updatedOn ? (
            <div>
              <p className='text-gray-900 font-bold'>Updated:</p>
              <time dateTime={new Date(updatedOn).toISOString()}>
                {updatedOn}
              </time>
            </div>
          ) : (
            <div>
              <p className='text-gray-900 font-bold'>Published:</p>
              <time dateTime={new Date(publishedOn).toISOString()}>
                {publishedOn}
              </time>
            </div>
          )}
          <div>
            <p className='text-gray-900 font-bold'>Tagged:</p>
            <Tags tags={tags} />
          </div>
        </div>
        {/* <p className='mt-4 font-mono text-sm'>
          {publishedOn} <Separator /> <Tags tags={tags} />
        </p> */}
      </Page.Header>
      <div className='prose'>{content}</div>
      <SharePage slug={slug} title={title} />
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const post = await getContentBySlug(params.slug, "posts");
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const posts = await getContentByType("posts");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  };
}
