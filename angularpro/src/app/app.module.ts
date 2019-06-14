import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
//import { SlideshowComponent } from './slideshow/slideshow.component';
import { DropdownComponent } from './component/dropdown/dropdown/dropdown.component';
import { DropdwnComponent } from './component/dropdwn/dropdwn.component';
import { InputComponent } from './component/input/input.component';
import { ImgComponent } from './component/img/img.component';
import { MydirectiveDirective } from './mydirective.directive';

@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   
    DropdownComponent,
   
    DropdwnComponent,
   
    InputComponent,
   
    ImgComponent,
   
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
