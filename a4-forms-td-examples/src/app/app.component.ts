import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm: NgForm;
  answer = '';
  genders= ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    
  }

  onSubmit() {
    console.log(this.singupForm);
  }
}
