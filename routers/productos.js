import express from "express";
import Contenedor from "../contenedor/contenedor.js";
import { Admin } from "../control/validaciones.js";
import { getProducto, editarProducto, agregarProducto, eliminarProducto } from "../control/products/productosHandlers.js";
import { IdValida, productoExistentes } from "../control/products/produtosValidacion.js";

const { Router } = express;
const productosRouter = Router();

export const producContenedor = new Contenedor("./datos/productos.txt");

productosRouter.put("/:id", Admin, productoExistentes, editarProducto);

productosRouter.get("/:id?", IdValida, getProducto);

productosRouter.post("/", Admin , agregarProducto);

productosRouter.delete("/:id", Admin, productoExistentes, eliminarProducto);

export default productosRouter;