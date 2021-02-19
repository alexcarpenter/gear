import Link from "next/link";
import { getContentByType } from "@/lib/mdx";
import Page from "@/components/Page";

export default function Home({ posts }) {
  return (
    <Page
      meta={{
        title: "Posts",
      }}
    >
      <Page.Header>
        <Page.Title>Posts</Page.Title>
        <Page.Description>
          Dictumst cubilia mauris vestibulum tortor ultrices tempus potenti
          tristique cum fermentum senectus semper consequat euismod leo
          ultricies sociosqu per rhoncus
        </Page.Description>
      </Page.Header>
      <ul className='space-y-8'>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <article>
                <h2 className='font-bold text-xl'>
                  <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                    <a className='text-gray-900 hover:underline'>
                      {post.title}
                    </a>
                  </Link>
                </h2>
                <p className='mt-2'>{post.description}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await getContentByType("posts");
  return { props: { posts } };
}
