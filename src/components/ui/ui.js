import React from 'react'
import { Link } from "react-router-dom";



class PeopleList extends React.Component {

    constructor(props) {
        super(props)

    }




    render() {


        const cName = (this.props.selected) ? "row divovi2" : "col-4 divovi";
        const renderedarray = this.props.people.map((element) => {
            const isPink = (element.gender === "female") ? "female col-10" : "col-10";

            return (
                <div className="container">
                    <div className={cName}>

                        <div className="col-2">
                            <img src={element.picture}></img>
                        </div >
                        <div className={isPink}>

                            <p>{element.name} {element.lastname}</p>
                            <p><i className="fas fa-envelope"></i> {element.email}</p>

                            <p><i className="fas fa-birthday-cake"></i>{element.bday}</p>
                        </div>


                    </div>
                </div>
            );

        })
        return renderedarray;


    }
}


export default PeopleList;