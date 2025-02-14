import { Autor } from "./Autor";

export interface IAutorRepository {
  getAll(): Promise<Autor[]>;
  getById(id: string): Promise<Autor | null>;
  create(autor: Autor): Promise<void>;
}
