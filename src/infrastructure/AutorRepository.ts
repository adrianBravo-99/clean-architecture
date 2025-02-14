import { IAutorRepository } from "../domain/IAutorRepository";
import { Autor } from "../domain/Autor";

export class AutorRepository implements IAutorRepository {
  private autores: Autor[] = [];

  async getAll(): Promise<Autor[]> {
    return this.autores;
  }

  async getById(id: string): Promise<Autor | null> {
    return this.autores.find(autor => autor.id === id) || null;
  }

  async create(autor: Autor): Promise<void> {
    this.autores.push(autor);
  }
}
