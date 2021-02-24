import Image, { ImageProps } from "next/image";
import { Info } from "react-feather";
import Emoji from "@/components/Emoji";
import ExternalLink from "@/components/ExternalLink";
import CustomLink from "@/components/CustomLink";
import CustomImage from "@/components/CustomImage";
// import slugify from "@sindresorhus/slugify";

const H2: React.FC = ({ children }) => {
  return <h2 className='text-xl font-bold text-gray-900'>{children}</h2>;
};

const H3: React.FC = ({ children }) => {
  return <h2 className='text-lg font-bold text-gray-900'>{children}</h2>;
};

const Strong: React.FC = ({ children }) => {
  return <strong className='text-gray-900'>{children}</strong>;
};

const Note: React.FC = ({ children }) => {
  return (
    <div className='border border-gray-300 bg-gray-50 p-4 flex'>
      <Info
        width='1em'
        height='1em'
        className='flex-shrink-0 mr-2 mt-1 text-gray-400'
      />
      {children}
    </div>
  );
};

const MDXComponents = {
  h2: H2,
  h3: H3,
  strong: Strong,
  Emoji,
  a: CustomLink,
  CustomImage,
  Note,
};

export default MDXComponents;
