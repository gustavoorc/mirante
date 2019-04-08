import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
