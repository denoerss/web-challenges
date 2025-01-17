import Head from "next/head";
import Link from "next/link";

import { volumes } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Movie List</title>
      </Head>

      <section className="movie">
        <h1>Movie List</h1>
        <ul className="movie-list">
          <li key={volumes.id} className="movie-list__title">
            <Link href="/volumes" className="movie-list__link">
              Lord of the Rings
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
