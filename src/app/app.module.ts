import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryComponent } from './gallery/gallery.component';
import { CnumPipe } from './cnum.pipe';
import {StoreModule} from '@ngrx/store';

import {SimpleReducer} from './simple.reducer';





@NgModule({
  imports:      [ BrowserModule,StoreModule.forRoot({message:SimpleReducer})],
  declarations: [ AppComponent, GalleryComponent, CnumPipe],
  bootstrap:    [ AppComponent ],
  providers:[]
})
export class AppModule { }



