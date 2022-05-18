import { Router } from "express";
import { ProductsService } from "../services/ProductsService";

const router = Router();
const service = new ProductsService();

router.get("/products/all/", async (req, res) => {
  try {
    const products = await service.getProducts();
    res.json(products);
  } catch (err) {
    console.log(err)
  }
});

router.post("/product/create/", async (req, res) => {
  const { name, price } = req.body;

  try {
    const product = await service.createProduct(name, price);
    res.json(product);
  } catch (err) {
    console.log(err.data)
  }
});

export { router as productsRouter };
