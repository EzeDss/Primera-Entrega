import express from "express";
import Contenedor from "../contenedor/contenedor.js";
import {
  nuevoCarrito,
  eliminarCarrito,
  getProductosCarrito,
  agregarPruducCarrito,
  eliminarProducEnCarrito,
} from "../control/carts/carritoHandlers.js";
import { carritoExistente, pruductoExistenCarrito, productoExistente } from "../control/carts/carritoValidacion.js";

const { Router } = express;
const carritoRouter = Router();

export const carritoContenedor = new Contenedor("./datos/carritos.txt");

carritoRouter.delete("/:id?", carritoExistente, eliminarCarrito);

carritoRouter.post("/", nuevoCarrito);

carritoRouter.get("/:id/productos", carritoExistente, getProductosCarrito);

carritoRouter.post("/:id/productos/:id_prod", carritoExistente, productoExistente, agregarPruducCarrito);

carritoRouter.delete("/:id/productos/:id_prod", carritoExistente, pruductoExistenCarrito, eliminarProducEnCarrito);

export default carritoRouter;