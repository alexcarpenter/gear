import { Instagram, Twitter, Mail, AtSign } from "react-feather";

const Footer: React.FC = () => {
  return (
    <footer className='mt-auto pt-16'>
      <ul className='flex justify-center space-x-4'>
        <li>
          <a href='https://instagram.com/alexcarp'>
            <span className='sr-only'>Instagram</span>
            <Instagram
              role='img'
              width='1.2em'
              height='1.2em'
              className='hover:text-gray-900'
            />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/hybrid_alex'>
            <span className='sr-only'>Twitter</span>
            <Twitter
              role='img'
              width='1.2em'
              height='1.2em'
              className='hover:text-gray-900'
            />
          </a>
        </li>
        <li>
          <a href='mailto:im.alexcarpenter@gmail.com'>
            <span className='sr-only'>Email</span>
            <Mail
              role='img'
              width='1.2em'
              height='1.2em'
              className='hover:text-gray-900'
            />
          </a>
        </li>
        <li>
          <a href='https://alexcarpenter.me'>
            <span className='sr-only'>Website</span>
            <AtSign
              role='img'
              width='1.2em'
              height='1.2em'
              className='hover:text-gray-900'
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
