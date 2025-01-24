import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const allProducts = getAllProducts();

  if (!allProducts) {
    return res.status(404).json({ status: "Not Found" });
  }

  res.status(200).json(allProducts);
}
