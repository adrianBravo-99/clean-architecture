import { Libro } from "./Libro";

export interface ILibroRepository {
  getAll(): Promise<Libro[]>;
  getById(id: string): Promise<Libro | null>;
  getByAutorId(autorId: string): Promise<Libro[]>;
  create(libro: Libro): Promise<void>;
}
