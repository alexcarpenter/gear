import * as React from "react";

const Tags: React.FC<{
  tags: string[];
}> = ({ tags }) => {
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
      <button onClick={() => setShowAll(true)} className='hover:text-gray-900'>
        (+{total - 2})
      </button>
    </span>
  );
};

export default Tags;
