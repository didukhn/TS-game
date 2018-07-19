import { IFighter } from "../interfaces/fighter";
import { IImprovedFighter } from "../interfaces/improvedFighter";

export async function fight(fighter: IFighter, improvedFighter: IImprovedFighter, ...points: number[]): Promise<void> {
    let i = 0;
    while (fighter.health >= 0 && improvedFighter.health >= 0 && i < points.length) {
        fighter.hit(improvedFighter, points[i]);
        improvedFighter.doubleHit(fighter, points[i]);
        ++i;
    }

    if (fighter.health <= 0) {
        console.log("user in knockout");
        let promise = fighter.knockout();
        return await promise.then(result => {
            console.log("winner is" + improvedFighter.name + "!!!");
        })
    }
    else if (improvedFighter.health <= 0) {
        console.log("user in knockout");
        let promise = improvedFighter.knockout();
        return await promise.then(result => {
            console.log("winner is" + fighter.name + "!!!");
        });
    } else {
        console.log("Both are alive :(")
    }
}