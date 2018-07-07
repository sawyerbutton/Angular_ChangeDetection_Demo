import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() text;
  constructor(private parent: ParentComponent) { }

  ngOnInit() {
    // this.parent.text = '修改后的信息';
    // 如果我们同样也对name属性进行变更，
    // this.parent.name = '修改后的名称';
    // setTimeout(() => {
    //   this.parent.text = '修改后的信息';
    // });
  }

  ngAfterViewInit() {
    // this.parent.name = '修改后的名称';
    Promise.resolve(null).then(() => this.parent.name = '修改后的名称');
    // setTimeout(() => {
    //   this.parent.name = '修改后的名称';
    // });
  }

}
