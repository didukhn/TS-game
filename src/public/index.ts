import { fight } from './fight/fight';
import { Fighter } from "./fight/fighter";
import { ImprovedFighter } from "./fight/improvedFighter";

export default class Main {

    fighter1 = new Fighter('Fighter', 100, 3);
    fighter2 = new ImprovedFighter('ImprovedFighter', 100, 5);


    public async run() {
        await fight(this.fighter1, this.fighter2, 12, 12, 12, 12);

        console.log('the happy end');
    }
}

const start = new Main();
start.run();