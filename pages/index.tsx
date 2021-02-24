import CustomLink from "@/components/CustomLink";
import Emoji from "@/components/Emoji";
import Page from "@/components/Page";
// import Subscribers from "@/components/Subscribers";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <Page
      meta={{
        title: "Gear",
      }}
    >
      <Page.Header>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
          Welcome
        </h1>
      </Page.Header>
      <section className='prose text-gray-600'>
        <p className='text-xl'>
          I'm{" "}
          <CustomLink href='https://alexcarpenter.me'>
            Alex Carpenter
          </CustomLink>{" "}
          and this is my place to share my passion for tech and everyday carry
          gear. I've never shared much about this type of content, but I find a
          lot of enjoyment nerding out about this stuff, so here we are. Here is
          a look at some pieces of content you can expect to see around here.
        </p>
        <ul>
          <li>Favorite tech and everydary carry pouches</li>
          <li>Onebag travel for 7 days in Maui</li>
          <li>Favorite everyday carry backpack</li>
          <li>Favorite insulated water bottle</li>
          <li>
            and possibly interviews with folks from the community{" "}
            <Emoji label='fingers crossed' symbol='🤞' />
          </li>
        </ul>
      </section>
      <section className='mt-8'>
        <header className='flex items-center'>
          <h2 className='mr-4 text-xl text-gray-900 font-bold tracking-tight font-mono'>
            Join the newsletter
          </h2>
          <span className='flex-1 h-0.5 bg-gray-200' />
        </header>
        <div className='mt-4 text-gray-600'>
          <div className='prose'>
            <p>
              Outside of sharing content from this site, the newsletter is a way
              for me to share inspiration that I have found around the web that
              I have enjoyed. You will probably see links to{" "}
              <CustomLink href='https://www.youtube.com/user/chasereeves'>
                Chase Reeves
              </CustomLink>{" "}
              videos,{" "}
              <CustomLink href='https://www.carryology.com/contributor/taylor-welden/'>
                Taylor Welden
              </CustomLink>{" "}
              articles, etc.
            </p>
            <p>
              If that sounds interesing to you, feel free to subscribe below.
              You can unsubscribe at any time.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </Page>
  );
}
