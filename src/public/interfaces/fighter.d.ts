export interface IFighter {
    power: number;
    health: number;
    name: string;

    setDamage(damage: number): void;
    hit(enemy: IFighter, point: number): void;
    knockout(): Promise<string>;

}

