import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private form$: BehaviorSubject<string> = new BehaviorSubject('');

  public getFormObs(): Observable<string> {
    return this.form$.asObservable();
  }

  public setFormObs(form: string) {
    this.form$.next(form);
  }
}
