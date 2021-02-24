//@ts-nocheck
import Link, { LinkProps } from "next/link";
import { ExternalLink } from "react-feather";

const CustomLink: React.FC<LinkProps> = (props) => {
  const href = props.href;

  const isInternalLink =
    href &&
    (href.toString().startsWith("/") || href.toString().startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className='text-underline' {...props} />
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className='text-underline inline-flex items-center'
      {...props}
    >
      {props.children}
      <ExternalLink
        width='1em'
        height='1em'
        className='ml-1 text-gray-600'
        focusable={false}
        aria-hidden={true}
      />
    </a>
  );
};

export default CustomLink;
