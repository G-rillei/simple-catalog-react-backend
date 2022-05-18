import "dotenv/config";
import express from "express";
import { productsRouter } from "./controllers/ProductsController";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())
app.use(productsRouter)


app.listen(process.env.PORT, ()=> console.log('Servidor rodando'));