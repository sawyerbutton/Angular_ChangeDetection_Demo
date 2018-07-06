import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements DoCheck, OnInit, OnChanges {
  @Input() data;
  public id: number;
  public name: string;
  constructor(private cdr: ChangeDetectorRef) {
    this.id = 100;
    this.name = 'Button';
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('B组件Input()属性的之前值' + changes.data.previousValue);
    console.log('B组件Input()属性的当前值' + changes.data.currentValue);
  }
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
  public onDomChange($event: Event): void {
    console.log($event);
  }
}
