import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {RestService} from './rest.service';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {

  constructor(public rest: RestService, public route: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
      // return this.rest.getProfile()
      // .pipe(
      //   catchError(err => {
      //     console.log('error', err);
      //     this.route.navigate(['error']);
      //     return of();
      //   })
      // );


    return forkJoin(
      [
        this.rest.getProfile(),
        this.rest.getRole()
      ])
      .pipe(
        map(res => {
          return {
            profile: res[0],
            role: res[1]
          };
        }),
        catchError(err => {
          console.log('error', err);
          this.route.navigate(['error']);
          return of();
        })
      );
  }
}
