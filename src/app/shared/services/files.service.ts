import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  fileExists(url: string): Observable<boolean> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        map(response => {
          return true;
        }),
        catchError(error => {
          return of(error);
        })
      )
  }
}
