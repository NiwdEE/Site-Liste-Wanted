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
  author: string,
  task: string,
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

  testChallenge: challenge = {
    by: "admin au beure salé    ",
    desc: "finir le site avant les reveals, et wola que ca va pas etre facile, j'aime les crepes <script>alert(1)</script>",
    postdate: "10/02/2022",

    link: "dQw4w9WgXcQ",
    madedate: "17/02/2022"
  }

  tests: challenge[] = Array(20).fill(this.testChallenge);

  siteKey = "6Lf9OIgeAAAAAAJHRIIxSVC9g-XeU_sgoq3j4rHk"

  finished: challenge[] = [];
  posted: proposition[] = []
  // tests: challenge[] = []

  constructor(private http: HttpClient){
    this.getChalls()
  }


  getChalls(){
    this.http.get('https://liste-wanted.fr/api-abeille-ruche-miel-o-crack/defis/retrieve')
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


}
