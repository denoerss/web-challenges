import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  const { index, slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  // find current volume index
  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );

  // volume not found?
  if (currentVolumeIndex === -1) {
    return (
      <>
        <h1>Volume Not Found</h1>
        <Link href="/volumes">← All Volumes</Link>
      </>
    );
  }

  // get current, prev and next volumes
  const currentVolume = volumes[currentVolumeIndex];
  const prevVolume =
    currentVolumeIndex > 0 ? volumes[currentVolumeIndex - 1] : null;
  const nextVolume =
    currentVolumeIndex < volumes.length - 1
      ? volumes[currentVolumeIndex + 1]
      : null;

  return (
    <>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
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
      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>← {prevVolume.title}</Link>
      )}
      {prevVolume && nextVolume && " | "}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title} →</Link>
      )}
    </>
  );
}
