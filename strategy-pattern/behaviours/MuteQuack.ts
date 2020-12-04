import { QuackBehaviour } from '../main/QuackBehaviour';

export class MuteQuack implements QuackBehaviour {

  quack() :void {
    console.log('Silence');
  }
  
}