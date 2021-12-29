import { Injectable } from '@angular/core';
import { member, nullMember, Poles } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  Poles = Poles;

  constructor(){
    let i = 0;
    for(let pole of this.Poles){
      for(let member of pole.members){
        if(member.id === undefined) member.id = i++;
      }
    }
  }


  getByID(id: number|undefined): member{
    
    if(id === undefined){
      return nullMember;
    }

    for(let pole of this.Poles){
      for(let member of pole.members){
        if(member.id === id) return member;
      }
    }

    return nullMember;
    
  }

  idNameMap(): {[id: number]: string}{
    let map:{[id: number]: string} = {};

    for(let pole of this.Poles){
      for(let member of pole.members){
        if(member.id){
          map[member.id] = member.name;
        }
      }
    }

    return map;
  }
}
