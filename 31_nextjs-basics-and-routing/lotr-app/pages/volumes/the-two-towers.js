import { volumes } from "@/resources/lib/data";

import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const prevVolume = volumes[0];
  const currentVolume = volumes[1];
  const nextVolume = volumes[2];

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        alt={currentVolume.title}
        src={`/resources${currentVolume.cover}`}
        width={140}
        height={230}
      />
      <br /> <br />
      {/* TO-DO: Implement conditional rendering */}
      <div className="navigation">
        <Link href={`/volumes/${prevVolume.slug}`}>← {prevVolume.title}</Link> |{" "}
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title} →</Link>
      </div>
    </>
  );
}
