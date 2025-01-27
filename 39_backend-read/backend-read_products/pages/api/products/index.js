import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const products = await Product.findById(id).populate("reviews");
    return response.status(200).json(products);
  }
  return response.status(405).json({ message: "Method not allowed" });
}
