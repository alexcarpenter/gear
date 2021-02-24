import Image from "next/image";
import CustomLink from "@/components/CustomLink";
import CustomImage from "@/components/CustomImage";
//@ts-ignore
import data from "@/data/resources";

const Resources: React.FC = () => {
  const keys = Object.keys(data);
  const resources = keys.map((k) => data[k]);
  return (
    <div className='divide-y divide-gray-300 -my-8'>
      {resources.map((resource) => (
        <section key={resource.id} className='py-8'>
          <h2 className='text-xl font-bold text-gray-900'>{resource.title}</h2>
          <p className='mt-2'>
            Per platea placerat metus ullamcorper nascetur morbi vivamus sed
            sapien sit ridiculus luctus litora mus nam enim suscipit ante
            phasellus libero aliquet consectetur urna donec non sollicitudin ad
            vehicula potenti
          </p>

          <ul className='mt-8 grid gap-8'>
            {resource.items.map((item, index) => {
              return (
                <li key={index}>
                  <article className='flex gap-4'>
                    <div>
                      <h3 className='font-bold text-gray-900'>
                        <CustomLink href={item.link}>{item.name}</CustomLink>
                      </h3>
                      <p className='mt-2'>{item.description}</p>
                    </div>
                    <div className='w-1/6 flex-shrink-0 border flex'>
                      <CustomImage
                        src={`/images/${item.thumbnail}`}
                        alt={`${item.name} YouTube thumbnail`}
                        width={200}
                        height={200}
                      />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Resources;
