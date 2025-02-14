import { ILibroRepository } from "../domain/ILibroRepository";
import { Libro } from "../domain/Libro";

export class LibroRepository implements ILibroRepository {
  private libros: Libro[] = [];

  async getAll(): Promise<Libro[]> {
    return this.libros;
  }

  async getById(id: string): Promise<Libro | null> {
    return this.libros.find(libro => libro.id === id) || null;
  }

  async getByAutorId(autorId: string): Promise<Libro[]> {
    return this.libros.filter(libro => libro.autorId === autorId);
  }

  async create(libro: Libro): Promise<void> {
    this.libros.push(libro);
  }
}
