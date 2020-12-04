import { Duck } from '../main/Duck';
import { FlyWithWings } from '../behaviours/FlyWithWings';
import { Quack } from '../behaviours/Quack'; 

export class MallardDuck extends Duck {
  
  constructor() {
    const flyBehaviour =  new FlyWithWings();
    const quackBehaviour = new Quack();
    super(flyBehaviour, quackBehaviour);
    
  }

  display() :void {
    console.log(`I'm a real Mallard Duck!`);
  }
}