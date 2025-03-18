import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../state-management/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count'); // selector
    console.log(this.count$)
  }

  increment() {
    // dispatch increment Action
    this.store.dispatch(increment());
  }
  decrement() {
    // dispatch decrement Action
    this.store.dispatch(decrement());
  }
  reset() {
    // dispatch reset Action
    this.store.dispatch(reset());
  }
}
