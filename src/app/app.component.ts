import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'Angular ngDoCheck 工作方式';
  public data = {id: 1, name: 'John'};
  public observer: any;
  constructor(private elRef: ElementRef) {}
  ngOnInit() {
    console.log('根组件的ngOnInit钩子被调用，并在2s后修改内部属性');
    setTimeout(() => {
      this.data.id = 2;
      this.data.name = 'Sawyer';
    }, 10000);
  }
  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function(mutation) {
        console.log(mutation.type);
      });
    });
    const config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement, config);
  }
  public onDomChange($event: Event): void {
    console.log($event);
  }
  public changeData() {
    this.data.id = 3;
    this.data.name = '手动修改';
  }
}
