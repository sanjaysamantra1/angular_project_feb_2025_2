import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_feb_2025_2';

  cars = ['tata', 'honda']

  add(a: number, b: number) {
    return a + b;
  }
  isEven(n: number) {
    if (n % 2 == 0) {
      return 'even'
    } else {
      return 'odd'
    }
  }
  addNewcar(car: string) {
    this.cars.push(car);
  }
}
