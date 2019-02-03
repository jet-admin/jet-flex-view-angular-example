import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { JetTestComponent } from './jet-test/jet-test.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    JetTestComponent
  ],
  entryComponents: [
    JetTestComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const Element = createCustomElement(JetTestComponent, { injector: this.injector });
    customElements.define('jet-test-angular', Element);
  }
}
