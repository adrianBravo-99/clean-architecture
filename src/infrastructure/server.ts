import express from "express";
import { AutorRepository } from "./AutorRepository";
import { LibroRepository } from "./LibroRepository";
import { GetAllAutores } from "../use-cases/GetAllAutores";
import { GetAllLibros } from "../use-cases/GetAllLibros";
import { CreateLibro } from "../use-cases/CreateLibro";
import { AutorController } from "../adapters/AutorController";
import { LibroController } from "../adapters/LibroController";

const app = express();
app.use(express.json());

// Repositorios en memoria
const autorRepository = new AutorRepository();
const libroRepository = new LibroRepository();

// Casos de uso
const getAllAutores = new GetAllAutores(autorRepository);
const getAllLibros = new GetAllLibros(libroRepository);
const createLibro = new CreateLibro(libroRepository);

// Controladores
const autorController = new AutorController(getAllAutores);
const libroController = new LibroController(getAllLibros, createLibro);

// Rutas
app.get("/autores", (req, res) => autorController.getAll(req, res));
app.get("/libros", (req, res) => libroController.getAll(req, res));
app.post("/libros", (req, res) => libroController.create(req, res));

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
