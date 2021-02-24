import Image, { ImageProps } from "next/image";

const CustomImage: React.FC<ImageProps> = (props) => {
  return (
    <div className='flex bg-gray-50'>
      <Image {...props} />
    </div>
  );
};

export default CustomImage;
