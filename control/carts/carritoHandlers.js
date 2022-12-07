import { carritoContenedor } from "../../routers/carrito.js";
import { producContenedor } from "../../routers/productos.js";

export async function getProductosCarrito(req, res) {
  const cart = carritoContenedor.getById(req.params.id);
  res.status(200).json(cart.productos);
}

export async function eliminarProducEnCarrito(req, res) {
  const { id, id_prod } = req.params;
  const cart = carritoContenedor.getById(id);
  const nuevoCarritoProduc = cart.productos.filter((producto) => {
    return producto.id != id_prod;
  });
  cart.productos = nuevoCarritoProduc;
  const carritoId = await carritoContenedor.update(id, cart);
  res
    .status(201)
    .json({
      carritoActualizado: carritoId,
      productoEliminado: id_prod,
    });
}

export async function eliminarCarrito(req, res) {
  const id = await carritoContenedor.deleteById(req.params.id);
  res.status(200).json({ carritoeliminado: id });
}

export async function nuevoCarrito(req, res) {
  const carrito = { fecha: Date.now(), productos: [] };
  const id = await carritoContenedor.save(carrito);
  res.status(201).json({ nuevoCarritoID: id });
}

export async function agregarPruducCarrito(req, res) {
  const carritoid = req.params.id;
  const productoid = req.params.id_prod;
  const cart = carritoContenedor.getById(carritoid);
  const product = producContenedor.getById(productoid);

  cart.productos.push(product);
  console.log(cart);
  const actuaId = await carritoContenedor.update(carritoid, cart);
  res
    .status(201)
    .json({ CarritoId: actuaId, ProductoAñadido: product });
}