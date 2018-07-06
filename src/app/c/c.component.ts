import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
    console.log('C 组件调用ngOnInit钩子');
  }
  ngDoCheck() {
    console.log('C组件调用ngDoCheck钩子');
  }

}
