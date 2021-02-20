import Image from "next/image";
import { ExternalLink } from "react-feather";
//@ts-ignore
import data from "@/data/resources";

const Resources: React.FC = () => {
  const keys = Object.keys(data);
  const resources = keys.map((k) => data[k]);
  return (
    <div className='divide-y divide-gray-300 -my-16'>
      {resources.map((resource) => (
        <section key={resource.id} className='py-16'>
          <h2 className='text-xl font-bold text-gray-900'>{resource.title}</h2>
          <p className='mt-2'>
            Per platea placerat metus ullamcorper nascetur morbi vivamus sed
            sapien sit ridiculus luctus litora mus nam enim suscipit ante
            phasellus libero aliquet consectetur urna donec non sollicitudin ad
            vehicula potenti
          </p>
          {resource.id === "brands" ? (
            <ul className='mt-8 grid grid-cols-4 sm:grid-cols-6 gap-8'>
              {resource.items.map((item) => {
                return (
                  <li>
                    <article>
                      <a href={item.link}>
                        <h3 className='sr-only'>{item.name}</h3>
                        <Image
                          src={`/images/${item.thumbnail}`}
                          alt={`${item.name} YouTube thumbnail`}
                          width={200}
                          height={200}
                        />
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className='mt-8 grid gap-8'>
              {resource.items.map((item) => {
                return (
                  <li>
                    <article className='flex gap-4'>
                      <div>
                        <h3 className='font-bold'>
                          <a
                            href={item.link}
                            className='text-underline text-gray-900 inline-flex items-center'
                          >
                            {item.name}
                            <ExternalLink
                              width='1em'
                              height='1em'
                              className='ml-1 inline text-gray-600'
                            />
                          </a>
                        </h3>
                        <p className='mt-2'>{item.description}</p>
                      </div>
                      <div className='w-1/6 flex-shrink-0'>
                        <Image
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
          )}
        </section>
      ))}
    </div>
  );
};

export default Resources;
