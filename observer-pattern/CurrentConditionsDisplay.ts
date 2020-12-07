import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

class CurrentConditionsDisplay implements Observer, DisplayElement {

  temp :Number;
  humidity :Number;
  pressure :Number;
  private weatherData :Subject;

  constructor(weatherData :Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  
  update(temp: Number, humidity: Number, pressure: Number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`Current conditions: ${ this.temp } degrees, ${ this.pressure } Pascal and ${ this.humidity }% humidity.`);
  }

}

export { CurrentConditionsDisplay };