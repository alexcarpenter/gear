import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { widont } from "@/lib/utils";

interface IPageProps {
  meta: {
    title: string;
    description?: string;
    image?: string;
  };
  children: React.ReactNode;
}

function Page({ meta, children }: IPageProps) {
  const { title, description, image } = meta;
  return (
    <>
      <Head
        title={`${title ? `${title} - ` : ""}Alex Carpenter`}
        description={description}
        image={image}
      />
      <div className='py-16 px-4 min-h-screen flex flex-col'>
        <div className='flex flex-col flex-1 w-full max-w-screen-sm mx-auto text-gray-600'>
          <Nav />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

function Header({ children }) {
  return <header className='mb-8'>{children}</header>;
}

function Title({ children }) {
  return (
    <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight'>
      {widont(children)}
    </h1>
  );
}

function Description({ children }) {
  return <p className='mt-2 text-xl'>{children}</p>;
}

Page.Header = Header;
Page.Title = Title;
Page.Description = Description;

export default Page;
