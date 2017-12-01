import { Injectable } from '@angular/core';
import  {User} from './user';
import {USERS} from './user-data';
import { findIndex } from 'lodash';
@Injectable()
export class UserService {
  private uservalue = USERS;

  getUsersFromData(): User[] {
    console.log(this.uservalue);
    return this.uservalue;
  }

  addUser(user: User) {
    this.uservalue.push(user);
    console.log(this.uservalue);

  }
  // updateUser(user : User){
  //   let index = findIndex(this.uservalue,(u:User)=>{
  //     return u.id=== user.id;
  //   })
  //   this.upersons[index]=user;
  // }
  // deleteUser(user : User){
  //   this.upersons.splice(this.upersons.indexOf(user),1);
  //   console.log(this.upersons);
  // }

  constructor() { }

}
