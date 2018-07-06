import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { calls } from './support';
import {
  AppComponent,
  CComponent, DComponent, EComponent,
  FComponent, HComponent,
  JComponent,
  KComponent,
  LComponent,
  OComponent, QComponent, RComponent,
  VComponent, WComponent,
  XComponent
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    KComponent,
    VComponent,
    LComponent,
    CComponent,
    XComponent,
    FComponent,
    JComponent,
    OComponent,
    HComponent,
    WComponent,
    EComponent,
    RComponent,
    QComponent,
    DComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setTimeout(showConsole, 1000);
  }
}

function showConsole() {
  calls.ngDoCheck.length = 0;
  calls.render.length = 0;
  setTimeout(() => {
    console.clear();
    console.group('ngDoCheck');
    calls.ngDoCheck.forEach((v) => console.log(v));
    console.groupEnd();
    console.group('render');
    calls.render.forEach((v) => console.log(v));
    console.groupEnd();
  });
}
