import prismaClient from "../prisma";

export class ProductsService {
  async getProducts() {

    const products = await prismaClient.products.findMany()

    return products;
  }

  async createProduct(name: string, price: number) {
    const product = await prismaClient.products.create({
      data: {
        name,
        price,
        isActive: true,
      },
    });

    return product;
  }
}
