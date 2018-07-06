import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponent,
    CComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
