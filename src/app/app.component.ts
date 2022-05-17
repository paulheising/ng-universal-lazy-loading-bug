import { firstValueFrom, take } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  someData: unknown;

  constructor(private http: HttpClient) {
    // HTTP call in AppComponent
    // Put this back in and you'll see the universal server will also contain
    // the response in the lazy loaded module.
    // Leave it out and you'll see that even the lazy module does not render the
    // content delivered from the HTTP call
    firstValueFrom(
      this.http
        .get('https://jsonplaceholder.typicode.com/todos/2')
        .pipe(take(1)),
    ).then((res) => (this.someData = res));
  }
}
