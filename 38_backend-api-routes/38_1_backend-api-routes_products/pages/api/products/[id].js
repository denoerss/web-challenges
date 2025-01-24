import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const singleProduct = getProductById(id);

  if (!singleProduct) {
    return res.status(404).json({ status: "Not Found" });
  }

  res.status(200).json(singleProduct);
}
