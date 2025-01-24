import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const allProducts = getAllProducts();

  res.status(200).json(allProducts);
}
