import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { TypedRes } from '../misc/common';
// import { HttpClient } from '@angular/core/' 

export type challenge = {
  by: string,
  desc: string,
  postdate: string,

  link: string,
  madedate: string
}

export type chall = {
  by: string,
  desc: string,
  postdate: string,

  made: boolean,
  link?: string,
  madedate?: string
}

export type proposition = {
  by: string,
  desc: string,
  postdate: string,
}

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  siteKey = "6Lf9OIgeAAAAAAJHRIIxSVC9g-XeU_sgoq3j4rHk"

  finished: challenge[] = [];
  posted: proposition[] = [];
  
  all: chall[] = [];  

  constructor(private http: HttpClient){
    this.getChalls()
  }


  getChalls(){
    this.http.get('https://liste-wanted.fr/api-abeille-ruche-miel-o-crack/defis/getsite')
    .pipe(take(1))
    .subscribe({
      next: (res: any) => {
        this.finished = res.finished;
        this.posted = res.posted;
      },
      error: (err) => {
        console.log('Une erreur est survenue: ', err)
      }
    })
  }


  subChall(task: string, author: string, token: string){
    let query = this.http.post<any>('https://liste-wanted.fr/api-abeille-ruche-miel-o-crack/defis/addsite', {
      task: task,
      author: author,
      token: token
    });

    return query;
  }


  getAllChalls(){
    this.http.get('https://liste-wanted.fr/api-abeille-ruche-miel-o-crack/defis/getall')
    .pipe(take(1))
    .subscribe({
      next: (res: any) => {
        this.all = res.all;
      },
      error: (err) => {
        console.log('Une erreur est survenue: ', err)
      }
    })
  }


}
