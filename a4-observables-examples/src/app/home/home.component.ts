
import { setTimeout } from 'timers';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSuscription: Subscription;
  customObsSuscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => { return data * 2; }
      );
    this.numbersObsSuscription = myNumbers.subscribe(
        (number: number) => {
          console.log(number);
        }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
       // observer.error('this does not work');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 7000);
    });

    this.customObsSuscription = myObservable.subscribe(
      (text: string) => { console.log(text); },
      (error: string) => { console.log(error); },
      () => { console.log('The job is done'); }
    );
  }

  ngOnDestroy () {
    this.numbersObsSuscription.unsubscribe();
    this.customObsSuscription.unsubscribe();
  }
}
