import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/products/${id}`);
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>No product found.</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <section>
        <h3>Reviews:</h3>
        {data.reviews && data.reviews.length > 0 ? (
          <ul>
            {data.reviews.map((review) => (
              <li key={review._id}>
                <p>
                  <strong>{review.title}</strong>
                </p>
                <p>{review.text}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </section>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
