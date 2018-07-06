import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements DoCheck, OnInit {
  @Input() data;
  public id = 100;
  public name = 'Button';
  constructor(private cdr: ChangeDetectorRef) {}

  ngDoCheck() {
    console.log('B组件的ngDoCheck钩子被调用');
    if (this.id !== this.data.id || this.data.name) {
      // 注释markForCheck 以示区别
      this.cdr.markForCheck();
      this.id = this.data.id;
      this.name = this.data.name;
    }
  }
  ngOnInit() {
    console.log('B 组件的ngInit钩子被调用');
  }
}
