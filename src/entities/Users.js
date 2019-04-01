
import Controller from '../app/controller';

class UsersObject {
    constructor(gender, name, email, picture, bday) {
        this.gender = gender;
        this.name = name;
        this.email = ("***") + email.slice(3, email.length);
        this.picture = picture;
        this.bday = new Date(bday).getDate() + '.' + new Date(bday).getMonth() + "." + new Date(bday).getFullYear();
    }
}



const ObjectPeople = () => {

    const newPeople = Controller
        .then((peopleResults) => {
            return peopleResults.map((element) => {
                return new UsersObject(element.gender, element.name, element.email, element.picture.large, element.dob.date)
            })
        })

    return newPeople
}

export default ObjectPeople;