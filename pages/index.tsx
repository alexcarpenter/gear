import Head from "next/head";
import Emoji from "@/components/Emoji";
// import Subscribers from "@/components/Subscribers";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gear - Alex Carpenter</title>
        <meta name='description' content='Tech and everyday carry gear'></meta>
      </Head>
      <div className='py-16 px-4'>
        <div className='max-w-screen-sm mx-auto space-y-8'>
          <section className='prose text-gray-600'>
            <p className='text-3xl'>
              <Emoji label='wave' symbol='👋' />
            </p>
            <p className='text-xl'>
              Welcome, I'm <a href='https://alexcarpenter.me'>Alex Carpenter</a>{" "}
              and this is my place to share my passion for tech and everyday
              carry gear. I've never shared much about this type of content, but
              I find a lot of enjoyment nerding out about this stuff, so here we
              are. Here is a look at some pieces of content you can expect to
              see around here.
            </p>
            <ul>
              <li>Favorite tech and everydary carry pouches</li>
              <li>Onebag travel for 7 days in Maui</li>
              <li>Favorite everyday carry backpack</li>
              <li>
                ...and hopefully interviews with folks from the community{" "}
                <Emoji label='fingers crossed' symbol='🤞' />
              </li>
            </ul>
          </section>
          <section>
            <header className='flex items-center'>
              <h2 className='mr-4 text-xl text-green-500 font-bold tracking-tight font-mono'>
                Join the newsletter
              </h2>
              <span className='flex-1 h-0.5 bg-gray-200' />
            </header>
            <div className='mt-4 text-gray-600'>
              <div className='prose'>
                <p>
                  Outside of sharing content from this site, the newsletter is a
                  way for me to share inspiration that I have found around the
                  web that I have enjoyed. You will probably see links to{" "}
                  <a href='https://www.youtube.com/user/chasereeves'>
                    Chase Reeves
                  </a>{" "}
                  videos,{" "}
                  <a href='https://www.carryology.com/contributor/taylor-welden/'>
                    Taylor Welden
                  </a>{" "}
                  articles, etc.
                </p>
                <p>
                  If that sounds interesing to you, feel free to subscribe
                  below. You can unsubscribe at any time.
                </p>
                <SubscribeForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
