import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  data = [{name: 'Button'}];
  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.data.push({name: 'Tommy'});
      // setTimeout + OnPush也需要配合 markForCheck使用
      this.cdr.markForCheck();
    }, 2000);
  }
}
