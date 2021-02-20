import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

interface IViewCounterProps {
  className?: string;
  slug: string;
}

const ViewCounter: React.FC<IViewCounterProps> = ({ className, slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);

  return <span className={className}>{views ? views : "–"} views</span>;
};

export default ViewCounter;
