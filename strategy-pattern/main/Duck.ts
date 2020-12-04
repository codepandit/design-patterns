import { FlyBehaviour } from './FlyBehaviour';
import { QuackBehaviour } from './QuackBehaviour';

export abstract class Duck {

  flyBehaviour :FlyBehaviour;
  quackBehaviour :QuackBehaviour;

  constructor(flyBehaviour :FlyBehaviour, quackBehaviour :QuackBehaviour) {
    this.flyBehaviour = flyBehaviour;
    this.quackBehaviour = quackBehaviour;
  }

  swim() :void {
    console.log('Duck is swimming.');
  }

  abstract display() :void;

  performFly() :void {
    this.flyBehaviour.fly();
  }

  performQuack() :void {
    this.quackBehaviour.quack();
  }

  setFlyBehaviour(flyBehaviour :FlyBehaviour) :void {
    this.flyBehaviour = flyBehaviour;
  }

  setQuackBehaviour(quackBehaviour :QuackBehaviour) :void {
    this.quackBehaviour = quackBehaviour;
  }
}