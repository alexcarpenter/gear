import Subscribers from "@/components/Subscribers";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <div className='py-16 px-4'>
      <div className='max-w-screen-sm mx-auto space-y-8'>
        <section>
          <p className='text-xl text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
            deserunt adipisci dolorem laborum perspiciatis harum voluptatum?
            Tenetur cumque nisi non maxime corrupti similique ipsa, eaque at
            odio culpa inventore delectus.
          </p>
        </section>
        <section>
          <header className='flex items-center'>
            <h2 className='mr-4 text-xl font-bold tracking-tight'>
              Join the newsletter
            </h2>
            <span className='flex-1 h-0.5 bg-gray-200' />
          </header>
          <div className='mt-4 text-gray-600'>
            <div className='prose'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis molestiae ipsa quod aut vel fugit, architecto,
                debitis in similique fuga aliquid deserunt, voluptatum aperiam
                eaque. Dolore culpa ullam maxime quidem.
              </p>
              <ul>
                <li>
                  <span className='mr-2'>–</span>Gear reviews
                </li>
                <li>
                  <span className='mr-2'>–</span>Thought-provoking things to
                  read, listen, watch
                </li>
                <li>
                  <span className='mr-2'>–</span>and more
                </li>
              </ul>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
