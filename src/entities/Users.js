
import Controller from '../app/controller';

class UsersObject {
    constructor(gender, name, lastname, email, picture, bday) {
        this.gender = gender;
        this.name = name[0].toUpperCase() + name.slice(1, name.length);
        this.lastname = lastname[0].toUpperCase() + lastname.slice(1, lastname.length)
        this.email = ("***") + email.slice(3, email.length);
        this.picture = picture;
        this.bday = new Date(bday).getDate() + '.' + new Date(bday).getMonth() + "." + new Date(bday).getFullYear();
    }
}



const ObjectPeople = () => {

    const newPeople = Controller
        .then((peopleResults) => {
            console.log(peopleResults);
            return peopleResults.map((element) => {
                return new UsersObject(element.gender, element.name.first, element.name.last, element.email, element.picture.large, element.dob.date)
            })
        })

    return newPeople
}

export default ObjectPeople;