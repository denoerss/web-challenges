import { introduction, volumes } from "@/resources/lib/data.js";

import Head from "next/head";
import Link from "next/link";

export default function Volumes(bla) {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>

      <section className="nav-bar">
        <Link href="/" className="nav-link">
          ← Home
        </Link>
      </section>

      <section className="movie">
        <h1 className="movie__title">Lord of the Rings</h1>
        <p className="movie__intro">{introduction}</p>

        <section className="volumes">
          <h2>All volumes</h2>
          <ol className="volumes__list">
            {volumes.map((volume) => (
              <li key={volume.slug}>
                <Link
                  href={`/volumes/${volume.slug}`}
                  className="volumes__link"
                >
                  {volume.title}
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </>
  );
}
