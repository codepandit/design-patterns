import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { WeatherData } from "./WeatherData";

const weatherData :WeatherData = new WeatherData();
const currentDisplay :CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 40);