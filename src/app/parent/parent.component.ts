import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  public name = '我是父组件';
  public text = '给子组件的信息';
  // view.oldValues[0] = '给子组件的信息';
  // 调用子组件的ngOnInit OnChanges ngDoCheck三个钩子
  // 更新父组件的DOM 并存储 view.oldValues[1] = '我是父组件';
  // 对子组件做同样的事
  // AComponentView.instance.text === view.oldValues[0]; // false
  // '给子组件的信息' === '修改后的给子组件的信息'; // false
  // ExpressionChangedAfterItHasBeenCheckedError 就会出现
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.cdr.detectChanges();
  }

}
