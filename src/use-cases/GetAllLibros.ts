import { ILibroRepository } from "../domain/ILibroRepository";
import { Libro } from "../domain/Libro";

export class GetAllLibros {
  constructor(private libroRepository: ILibroRepository) {}

  async execute(): Promise<Libro[]> {
    return await this.libroRepository.getAll();
  }
}
