import { Observer } from './Observer';
import { Subject } from './Subject';

class WeatherData implements Subject {

  observers :Array<Observer>;
  temp :Number;
  humidity :Number;
  pressure :Number;

  constructor() {
    this.observers = new Array;
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
    console.log(this.observers);
  }
  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
    console.log(this.observers);
  }
  notifyObservers(): void {
    this.observers.forEach( (observer) => {
      observer.update(this.temp, this.humidity, this.pressure);
    });
  }

  measurementsChanged() :void {
    this.notifyObservers();
  }

  setMeasurements(temp :Number, humidity :Number, pressure :Number) :void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

export { WeatherData };