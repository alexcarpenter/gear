import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function Subscribers({ className = null }) {
  const { data } = useSWR("/api/subscribers", fetcher);
  return (
    <span className={className}>
      {data?.count ? data.count : "–"} subscribers
    </span>
  );
}
