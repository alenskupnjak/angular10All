import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackfileService {

  constructor(private http: HttpClient) { }


  // Povuci sve podatke iz file base
  findAllFileCourses(): Observable<any> {
    return this.http
      .get(`${environment.URL_ANGULAR10ALLBACKEND}/appcourse/courses`)
      .pipe((data) => {
        console.log(data);
        return data;
      })
      // .pipe(
      //   map((res) => {
      //     let footer = [];
      //     res['payload'].forEach((e) => {
      //       footer.push([e.id, e.description, e.iconUrl]);
      //     });
      //     this.footerData.next(footer);

      //     return res['payload'];
      //   })
      // );
  }
}
