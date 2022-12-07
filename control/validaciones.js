import { admin } from "../server.js";

export function Admin(req, res, next) {
  admin
    ? next()
    : res
        .status(401)
        .json({
          error: -4,
          descripcion: 'Ruta no autorizada',
          route: req.originalUrl,
        });
}