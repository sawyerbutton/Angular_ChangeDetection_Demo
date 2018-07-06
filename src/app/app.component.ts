import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Angular ngDoCheck 工作方式';
  public data = {id: 1, name: 'John'};
  ngOnInit() {
    console.log('根组件的ngOnInit钩子被调用，并在2s后修改内部属性');
    setTimeout(() => {
      this.data.id = 2;
      this.data.name = 'Sawyer';
    }, 2000);
  }
}
