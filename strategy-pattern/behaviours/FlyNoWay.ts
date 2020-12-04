import { FlyBehaviour } from '../main/FlyBehaviour';

export class FlyNoWay implements FlyBehaviour {

  fly() :void {
    console.log('Duck cannot fly');
  }

}