import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1 className="text-4xl font-bold">Job Board</h1>
     <p className="text-lg text-gray-500">AI Interview Assistant</p>
     <Link className="bg-blue-500 text-white px-4 py-2 rounded-md" href="/jobs">Browse Jobs</Link>
    </div>
  );
}
