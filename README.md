# HeaterMeter

This project was generated with Angular CLI version 16.1.4. The page will display the current target temperature of the heater. Here minimum temperature is considered as 0°C and maximum temperature is 40°C. The interactivity is not included as instructed in the task. So the current target temperature is set to 22°C. But if you want to check meter pointer for different target temperature and min and max temperature feel free to make changes as below.

1. Go to src\app\app.component.html
2. Go to line no. 5
3. Change [targetTemperature] from 22 to any other current target temperature with the range 0-40.Observer the current target temperature pointer changing 
   accordingly.
4. Also try changing [minTemperature] and [maxTemperature]. Observe the pointer remains at same regardless of the absolute value of min and max value.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
