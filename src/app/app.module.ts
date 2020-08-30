import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { SameTradeComponent } from './component/same-trade/same-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    SameTradeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[AppComponent,SameTradeComponent]
})
export class AppModule { 
  constructor(private injector:Injector){}
  ngDoBootstrap(){
    const sameTradeElement = createCustomElement(SameTradeComponent,{injector:this.injector});
    customElements.define('same-trade',sameTradeElement);
  }
}
