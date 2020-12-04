import { QuackBehaviour } from '../main/QuackBehaviour';

export class Quack implements QuackBehaviour {

  quack() :void {
    console.log('Quack! Quack!');
  }

}