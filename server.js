import express from "express";
import router from "./routers/main.js";

export const admin = true;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router)

app.use((req, res) => {
    res.json({error: -1, description:req.originalUrl +  "No es una ruta no implementada "});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));