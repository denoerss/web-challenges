import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    isLoading,
    error,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products.</h2>;
  if (!product) return <h2>No products found.</h2>;

  return (
    <>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        {product.price} {product.currency}
      </p>
      <category>{product.category}</category>
    </>
  );
}
