
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
/*import {Observable} from 'rxjs-observable';*/
import { Observable } from 'rxjs';
 interface mydat
 {
  message:string;
 }
@Component({
  selector: 'app-root',

  template:`<h1>hello</h1>
  `,
  styles:[``]
})

export class AppComponent
{
  msg:Observable<string>
constructor(private st:Store<mydat>)
{
this.msg=this.st.select('message');
}

}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fn():string
{
  return "hello";
}
 
    }*/
    
    




