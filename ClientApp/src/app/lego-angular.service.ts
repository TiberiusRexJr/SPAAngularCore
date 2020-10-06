import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Lego } from '../Models/Legos';
import { ViewLegoComponent } from './view-lego/view-lego.component';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LegoAngularService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient )
  { this.myApiUrl = environment.appUrl;
    this.myAppUrl = '/SPACoreAngular/Controllers/api/Legoes';
  }

  getAllLegos(): Observable<Lego[]>
  {return this.http.get<Lego[]>(this.myAppUrl + this.myApiUrl).pipe(retry(1), catchError(this.errorHandler));
  }
  getLego(serialNumber: number): Observable<Lego> {
return this.http.get<Lego>(this.myAppUrl + this.myApiUrl + serialNumber).pipe(retry(1), catchError(this.errorHandler));
  }
 saveLego(lego: Lego): Observable<Lego> 
 {return this.http.post<Lego>(this.myAppUrl + this.myApiUrl , JSON.stringify(lego)).pipe(retry(1), catchError(this.errorHandler));
 }
 updateLego(serialNumber: number, lego: Lego): Observable<Lego>
{return this.http.put<Lego>(this.myApiUrl + this.myApiUrl + serialNumber , JSON.stringify(lego)).pipe(retry(1),
  catchError(this.errorHandler));
}
deleteLego(serialNumber: number): Observable<Lego> {
return this.http.delete<Lego>(this.myAppUrl + this.myApiUrl + serialNumber).pipe(retry(1), catchError(this.errorHandler));
}
errorHandler(error): Observable<never> {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
