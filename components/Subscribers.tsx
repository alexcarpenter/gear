import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const Subscribers: React.FC<{
  className?: string;
}> = ({ className = null }) => {
  const { data } = useSWR("/api/subscribers", fetcher);
  return (
    <span className={className}>
      {data?.count ? data.count : "–"} subscribers
    </span>
  );
};

export default Subscribers;
