import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    const newProduct = await request.body;
    await Product.create(newProduct);
    response.status(201).json({ status: "Product created." });
  }

  response.status(405).json({ status: "Method not allowed." });
}
