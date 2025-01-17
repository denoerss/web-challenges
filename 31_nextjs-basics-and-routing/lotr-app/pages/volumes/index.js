import { introduction, volumes } from "@/resources/lib/data.js";

import Head from "next/head";
import Link from "next/link";

export default function Volumes() {
  console.log("VOLUMES_", volumes);

  return (
    <>
      <Head>
        <title>All Volumes</title>
      </Head>
      <Link href={`/`}>← Movie List</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
