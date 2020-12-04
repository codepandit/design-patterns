import { FlyBehaviour } from '../main/FlyBehaviour';

export class FlyWithWings implements FlyBehaviour {

  fly(): void {
    console.log('Duck is flying.');
  }

}