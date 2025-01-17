import Head from "next/head";
import Link from "next/link";

import { volumes } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Movie List</title>
      </Head>
      <div>
        <h1>Movie List</h1>
        <ul>
          <li key={volumes.id}>
            <Link href="/volumes">Lord of the Rings</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
