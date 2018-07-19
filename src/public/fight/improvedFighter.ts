import { IImprovedFighter } from "../interfaces/improvedFighter"
import { Fighter } from "./fighter"
import { IFighter } from "../interfaces/fighter";

export class ImprovedFighter extends Fighter implements IImprovedFighter {

    constructor(
        _name: string,
        _health: number,
        _power: number
    ) {
        super(_name, _health, _power);
    }

    doubleHit(enemy: IFighter, point: number): void {
        let doubleDamage = 0;
        doubleDamage = 2 * point;
        this.hit(enemy, doubleDamage);
    }
}