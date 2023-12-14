import Link from "next/link";
import prisma from "@/db";
import { WhyItem } from "@/components/whyitem";

export default async function Home() {

  //Use this to delete everything from the database, 
  //uncomment, save, and its gone. With great power and such.
  // const deleteAll = await prisma.why.deleteMany({})

  const why = await prisma.why.findMany();

  return <>
    <header className="flex justify-between items-center mb-20">
      <h1 className="text-2xl">Why though?</h1>
      <Link
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded
      hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
      href="/createwhy">Create why</Link>
    </header>
    <ul className="pl-4 pr-4 items-center">
      {why.map(why => (
        <WhyItem key={why.id} {...why} />
      ))}
    </ul>
    </>
}
