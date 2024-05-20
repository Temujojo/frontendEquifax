import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'node:inspector';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = 'http://127.0.0.1:8000/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getJob(): Observable<any> {
    const url = `${this.host}jobs/jobs/`;
    return this.httpClient.get(url);
  }

  public createJob(body:any) {
    const url = `${this.host}jobs/jobs/`;
    return this.httpClient.post(url, body);
  }

  public getTechnology(): Observable<any> {
    const url = `${this.host}jobs/technologies/`
    return this.httpClient.get(url)
      .pipe(
        map((x: any) => {
          let y: Array<any> = [];
          x.forEach((element: { model: string; pk: string; fields: { name: string; }; }) => {
            y.push({
              id: element.pk,
              ...element.fields
            });
          });
          return y;
        })
      );
  }

  public createTechnology(): Observable<any> {
    const url = `${this.host}jobs/technologies/`;
    const body = {
      technology: 'Angular'
    }
    return this.httpClient.post(url, body);
  }
}
