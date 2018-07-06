import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public data = '初始状态'
  constructor() { }

  ngOnInit() {
  }
  public changeData() {
    this.data = this.data === '在父组件内进行数据变更' ? '初始状态' : '在父组件内进行数据变更';
  }
}
