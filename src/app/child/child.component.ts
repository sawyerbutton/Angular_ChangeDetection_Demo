import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ɵinjectChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() data;
  // 子组件数据只依赖于他的Input属性,可以通知angular跳过对这个组件的子树的变更检测只要Input属性不发生变化
  // 可以设定OnPush属性
  // 但是如果因为Input属性不是immutable数据类型 所以需要markForCheck标签进行额外处理
  // constructor(private cdr: ChangeDetectorRef) { }
  // object类型的例子转ngDoCheck
  ngOnInit() {
  }
}
