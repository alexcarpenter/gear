import * as React from "react";

interface ITagsProps {
  tags: string[];
}

const Tags: React.FC<ITagsProps> = ({ tags }) => {
  let [showAll, setShowAll] = React.useState(false);
  let total = tags.length;

  if (total < 2 || showAll) {
    return <span>{tags.map((t) => `#${t}`).join(", ")}</span>;
  }

  return (
    <span>
      {tags
        .slice(0, 2)
        .map((t) => `#${t}`)
        .join(", ")}
      ,{" "}
      <button
        onClick={() => setShowAll(true)}
        className='hover:text-gray-900 hover:bg-yellow focus:text-gray-900 focus:bg-yellow'
      >
        (+{total - 2})
      </button>
    </span>
  );
};

export default Tags;
