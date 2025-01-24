import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const {
    data: character,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading character.</h2>;
  if (!character) return <h2>No character found.</h2>;

  return (
    <>
      <h1>Random Character</h1>
      <p>First Name: {character.firstName}</p>
      <p>Last Name: {character.lastName}</p>
      <p>Gender: {character.gender}</p>
      <p>Address: {character.address}</p>
      <p>Phone: {character.phone}</p>
    </>
  );
}
