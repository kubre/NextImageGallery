import dynamic from "next/dynamic";

const LazyHome = dynamic(() => import("../components/Home"), { ssr: false });

export default function Home() {
  return <LazyHome />;
}
