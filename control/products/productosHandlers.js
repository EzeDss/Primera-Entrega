import { producContenedor } from "../../routers/productos.js";


export async function getProducto(req, res) {
  console.log(req.params.id);
  res
    .status(200)
    .json(
      !req.params.id
        ? await producContenedor.getAll()
        : producContenedor.getById(req.params.id)
    );
}

export async function agregarProducto(req, res) {
  const { Nombre, Precio, Descripcion, Foto, Stock } = req.body;
  const producto = {
    Fecha: Date.now(),
    Nombre,
    Precio,
    Descripcion,
    Foto,
    Stock,
  };
  const id = await producContenedor.save(producto);
  res.status(201).json({ NuevoProducto: id });
}

export async function editarProducto(req, res) {
    const { Nombre, Precio, Descripcion, Foto, Stock } = req.body;
    const editarProducto = {
      Fecha: Date.now(),
      Nombre,
      Precio,
      Descripcion,
      Foto,
      Stock,
    };
    const id = await producContenedor.update(req.params.id, editarProducto);
    res
      .status(200)
      .json({ ProductoEditado: [producContenedor.getById(id)] });
  }

  export async function eliminarProducto(req, res) {
    const id = await producContenedor.deleteById(req.params.id);
    res.status(200).json({ ProductoEliminado: id });
  }