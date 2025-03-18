import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialDemo1Component } from './components/material-demo1/material-demo1.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoCrudComponent } from './components/todo-crud/todo-crud.component';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo1Component,
    // CounterComponent,
    TodoCrudComponent
  ],
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

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
