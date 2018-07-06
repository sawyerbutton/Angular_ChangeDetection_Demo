import { Component } from '@angular/core';
import { Item} from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Item = {id: 0, value: 'demo', done: true};
  public changeData() {
    // 可以被检测到的方案
    this.data.done = !this.data.done;
  }
}
