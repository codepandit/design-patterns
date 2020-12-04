import { Duck } from '../main/Duck';
import { FlyNoWay } from '../behaviours/FlyNoWay';
import { Squeak } from '../behaviours/Squeak';


export class RubberDuck extends Duck {

  constructor() {
    const flyBehaviour = new FlyNoWay();
    const quackBehaviour = new Squeak();
    super(flyBehaviour, quackBehaviour);
  }

  display(): void {
    console.log(`I'm a rubber duck!`);
  }
}