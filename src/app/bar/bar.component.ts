import { firstValueFrom, take } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnDestroy {
  someData: unknown;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('BarComponent init, triggering HTTP call now');

    firstValueFrom(
      this.http
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .pipe(take(1)),
    ).then((res) => {
      console.log('BarComponent received the result from the HTTP call');
      this.someData = res;
    });
  }

  ngOnDestroy(): void {
    console.log('BarComponent destroyed');
  }
}
