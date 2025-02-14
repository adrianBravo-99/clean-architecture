import { ILibroRepository } from "../domain/ILibroRepository";
import { Libro } from "../domain/Libro";

export class CreateLibro {
  constructor(private libroRepository: ILibroRepository) {}

  async execute(id: string, titulo: string, autorId: string): Promise<void> {
    const libro = new Libro(id, titulo, autorId);
    await this.libroRepository.create(libro);
  }
}
