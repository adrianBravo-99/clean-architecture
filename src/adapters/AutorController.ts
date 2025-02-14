import { GetAllAutores } from "../use-cases/GetAllAutores";
import { Request, Response } from "express";

export class AutorController {
  constructor(private getAllAutores: GetAllAutores) {}

  async getAll(req: Request, res: Response) {
    try {
      const autores = await this.getAllAutores.execute();
      res.json(autores);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener autores" });
    }
  }
}
