import { IAutorRepository } from "../domain/IAutorRepository";
import { Autor } from "../domain/Autor";

export class GetAllAutores {
  constructor(private autorRepository: IAutorRepository) {}

  async execute(): Promise<Autor[]> {
    return await this.autorRepository.getAll();
  }
}
