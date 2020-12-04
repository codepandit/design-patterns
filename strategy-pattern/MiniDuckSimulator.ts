import { Duck } from './main/Duck';
import { MallardDuck } from './ducks/MallardDuck';
import { Squeak } from './behaviours/Squeak';
import { MuteQuack } from './behaviours/MuteQuack';
import { RubberDuck } from './ducks/RubberDuck';

const mallard :Duck = new MallardDuck();
mallard.performFly();
mallard.performQuack();
mallard.display();

// Change quack behaviour dynamically
mallard.setQuackBehaviour(new Squeak());
mallard.performQuack();



const rubber :Duck = new RubberDuck();
rubber.performFly();
rubber.performQuack();
rubber.display();

rubber.setQuackBehaviour(new MuteQuack());
rubber.performQuack();