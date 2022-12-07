import { carritoContenedor } from "../../routers/carrito.js";
import { producContenedor } from "../../routers/productos.js";

export function pruductoExistenCarrito(req, res, next) {
  const productosCarrito = carritoContenedor.getById(req.params.id).productos;
  const prod = productosCarrito.filter((prod) => prod.id == req.params.id_prod);
  prod.length == 0
    ? res
        .status(401)
        .json({ error: -3, descripcion: "El producto no existe en el carrito" })
    : next();
}

export function carritoExistente(req, res, next) {
  carritoContenedor.getById(req.params.id)
    ? next()
    : res
        .status(401)
        .json({ error: -3, descripcion: 'Este carrito no existe' });
}

export function productoExistente(req, res, next) {
  producContenedor.getById(req.params.id_prod) == null
    ? res
        .status(401)
        .json({ error: -3, descripcion: "Este producto no existe" })
    : next();
}
