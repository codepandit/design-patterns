import { QuackBehaviour } from '../main/QuackBehaviour';

export class Squeak implements QuackBehaviour {

  quack() :void {
    console.log('Squeak!');
  }

}