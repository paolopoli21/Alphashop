import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(UserId, Password){
    if(UserId === "Nicola" && Password ==="123"){
      sessionStorage.setItem("Utente", UserId)
      return true;
    }
    else{
      return false;
    }
  }
}
