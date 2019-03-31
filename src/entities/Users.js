
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
.then(  (Controller)=>{Controller.map((Controller)=>{
          
    return (
        <div>
            <p>{Controller.gender}</p>
            <p>{Controller.name}</p>
            <p>{Controller.email}</p>

        </div> 
    )
    })
  
  
})
return newPeople;
}

export default ObjectPeople;