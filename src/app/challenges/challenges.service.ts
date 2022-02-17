import { Injectable } from '@angular/core';


export type challenge = {
  by: string,
  desc: string,
  postdate: string,

  link: string,
  madedate: string
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

  tests: challenge[] = Array(20).fill(this.testChallenge)

  constructor(){
    
  }

}
