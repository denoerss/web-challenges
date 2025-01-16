import { introduction, volumes } from "@/resources/lib/data.js";
import Link from "next/link";

export default function Volumes() {
  console.log("VOLUMES_", volumes);

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul>
        <li>
          <Link href={`/volumes/${volumes[0].slug}`}>{volumes[0].title}</Link>
        </li>
        <li>
          <Link href={`/volumes/${volumes[1].slug}`}>{volumes[1].title}</Link>
        </li>
        <li>
          <Link href={`/volumes/${volumes[2].slug}`}>{volumes[2].title}</Link>
        </li>
      </ul>
    </>
  );
}
