import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductPage() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products.</h2>;
  if (!data) return <h2>No products found.</h2>;

  return (
    <>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
