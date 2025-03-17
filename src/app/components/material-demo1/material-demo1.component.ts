import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-material-demo1',
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './material-demo1.component.html',
  styleUrl: './material-demo1.component.css'
})
export class MaterialDemo1Component {

}
