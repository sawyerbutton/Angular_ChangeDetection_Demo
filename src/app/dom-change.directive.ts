import {Directive, ElementRef, EventEmitter, OnDestroy, Output} from '@angular/core';

@Directive({
  selector: '[appDomChange]'
})
export class DomChangeDirective implements OnDestroy {
  // MutationObserver是一个Web API，可以检测由DOM操作引起的节点修改
  private changes: MutationObserver;
  @Output()
  public domChange = new EventEmitter();
  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
      }
    );

    this.changes.observe(element, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }
  ngOnDestroy() {
    this.changes.disconnect();
  }
}
