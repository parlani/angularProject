import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {HeaderComponent} from "./main/header/header.component";

const commponent = [
  MainComponent,
  HeaderComponent

]

@NgModule({
  declarations: [commponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [commponent]
})
export class LayoutsModule {
}
