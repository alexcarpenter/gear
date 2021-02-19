const SharePage: React.FC<{
  slug: string;
  title: string;
}> = ({ slug, title }) => {
  const text = encodeURIComponent(title);
  return (
    <div className='mt-16 flex items-center font-mono text-sm'>
      <span className='text-gray-900 font-bold uppercase'>Share via</span>
      <span className='h-0.5 bg-gray-200 flex-1 mx-4'></span>
      <div className='space-x-4'>
        <a
          href={`https://twitter.com/intent/tweet?url=https://alexcarpenter.me/${slug}&text=${text}`}
          className='hover:text-gray-900'
        >
          Twitter
        </a>
        <a
          href={`mailto:?subject=${text}&body=https://alexcarpenter.me/${slug}`}
          className='hover:text-gray-900'
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default SharePage;
