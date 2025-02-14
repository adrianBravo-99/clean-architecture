import { GetAllLibros } from "../use-cases/GetAllLibros";
import { CreateLibro } from "../use-cases/CreateLibro";
import { Request, Response } from "express";

export class LibroController {
  constructor(
    private getAllLibros: GetAllLibros,
    private createLibro: CreateLibro
  ) {}

  async getAll(req: Request, res: Response) {
    try {
      const libros = await this.getAllLibros.execute();
      res.json(libros);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener libros" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { id, titulo, autorId } = req.body;
      await this.createLibro.execute(id, titulo, autorId);
      res.status(201).json({ message: "Libro creado exitosamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el libro" });
    }
  }
}
