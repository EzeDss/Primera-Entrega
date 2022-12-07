import { producContenedor } from "../../routers/productos.js";

export function IdValida(req, res, next) {
  producContenedor.getById(req.params.id) == null && req.params.id != null
    ? res
        .status(401)
        .json({ error: -3, descripcion: "This product doesn't exists" })
    : next();
}

export function productoExistentes(req, res, next) {
  producContenedor.getById(req.params.id) == null
    ? res
        .status(401)
        .json({ error: -3, descripcion: "This product doesn't exists" })
    : next();
}