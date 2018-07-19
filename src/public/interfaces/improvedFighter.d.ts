import { IFighter } from "../interfaces/fighter";

export interface IImprovedFighter extends IFighter {
    doubleHit(enemy: IFighter, point: number): void;

}
