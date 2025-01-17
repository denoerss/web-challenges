import { useRouter } from "next/router";
import { volumes } from "@/resources/lib/data";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );

  if (currentVolumeIndex === -1) {
    return (
      <>
        <Link href="/volumes">← All Volumes</Link>
        <h1>Volume Not Found</h1>
      </>
    );
  }

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

      <section className="nav-bar">
        <Link href="/" className="nav-link">
          ← Home
        </Link>
        {" | "}
        <Link href="/volumes" className="nav-link">
          ← All Volumes
        </Link>
      </section>

      <section className="volume">
        <h1 className="volume__title">{currentVolume.title}</h1>
        <p className="volume__description">{currentVolume.description}</p>

        <ul className="book-list">
          {currentVolume.books.map((book, index) => (
            <li key={index} className="book-list__title">
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>

        <Image
          className="book-cover"
          alt={currentVolume.title}
          src={`/resources${currentVolume.cover}`}
          width={140}
          height={230}
        />
      </section>

      <br />

      <div className="nav-bar">
        {prevVolume && (
          <Link href={`/volumes/${prevVolume.slug}`} className="nav-link">
            ← {prevVolume.title}
          </Link>
        )}
        {prevVolume && nextVolume && " | "}
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`} className="nav-link">
            {nextVolume.title} →
          </Link>
        )}
      </div>
    </>
  );
}
