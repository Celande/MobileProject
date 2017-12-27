export interface BreedInterface {
    id: number,
    name: string,
    height: number,
    weight: number,
    color: string,
    origin: string,
    hair_growth?: number,
    milk_by_lactation?: number,
    duration_of_lactation?: number,
    exploitation: string,
    img_id?: number
}
