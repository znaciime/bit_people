
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
       
    Controller.map((element, )=>{
   
  return(  <div>
            <p>{element.gender}</p>
            <p>{element.name}</p>
            <p>{element.email}</p>

   </div> )
 
   })
   return newPeople
   })
}

export default ObjectPeople;