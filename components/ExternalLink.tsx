import { ExternalLink as FExternalLink } from "react-feather";

interface IExternalLinkProps {
  href: string;
  text?: string;
  icon?: React.ElementType;
}

const ExternalLink: React.FC<IExternalLinkProps> = ({
  children,
  href,
  icon: Icon = FExternalLink,
}) => {
  let text = children;
  if (!text) {
    const { hostname } = new URL(href);
    text = hostname;
  }
  let iconProps = {
    width: "1em",
    height: "1em",
    className: "ml-1 text-gray-600",
    focusable: false,
    "aria-hidden": true,
  };
  return (
    <a
      href={`${href}?ref=gear.alexcarpenter.me`}
      rel='noopener noreferrer'
      className='inline-flex items-center'
    >
      {text} <Icon {...iconProps} />
    </a>
  );
};

export default ExternalLink;
