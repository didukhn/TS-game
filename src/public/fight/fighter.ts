import { IFighter } from "../interfaces/fighter";

export class Fighter implements IFighter {
    constructor(
        private _name: string,
        private _health: number,
        private _power: number
    ) { }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }

    get name(): string { return this._name; }

    get power(): number { return this._power; }

    public setDamage(damage: number): void {
        this.health = this.health - damage;
        console.log(this.name, " health: ", this.health);
    }

    public hit(enemy: IFighter, point: number): void {
        let damage = 0;
        damage = point * this.power;
        enemy.setDamage(damage);
    }

    public knockout(): Promise<string> {
        return new Promise((resolve, reject) => {
            console.log("time is over");
            setTimeout(() => {
                resolve("resolved")
            }, 500);
        }
        );
    }

}