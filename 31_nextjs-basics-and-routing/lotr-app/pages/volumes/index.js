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
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
