
import React from 'react';
import Controller from '../app/controller';

class UsersObject {
    constructor(gender, name, email){
        this.gender=gender;
        this.name=name;
        this.email=email;
    }
}


const ObjectPeople= () => {
    
const newPeople=(Controller)
.then(  
    (Controller)=>{
       
    Controller.map((element )=>{
   
return new UsersObject(element.gender, element.name, element.email)
 
   })
   
   })
   return newPeople
}

export default ObjectPeople;