import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheFellowshipOfTheRing() {
  const currentVolume = volumes[0];
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
    </>
  );
}
