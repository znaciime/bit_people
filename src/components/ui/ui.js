import React from 'react'
import { Link } from "react-router-dom";



class PeopleList extends React.Component {

    constructor(props) {
        super(props)

    }




    render() {


        const cName = (this.props.selected) ? "divovi2 row" : "col-sm-4 col-md-4 col-lg-4 divovi ";
        const renderedarray = this.props.people.map((element) => {
            const isPink = (element.gender === "female") ? "female" : "";

            return (
                <div className="container">
                    <div className={cName}>
                    <div className={isPink}>
                        <div className="col-4 ">
                            <img src={element.picture}></img>
                        </div >
                        <div className="col-8 col-sm-12 col-md-12">

                            <p>{element.name} {element.lastname}</p>
                            <p><i className="fas fa-envelope"></i> {element.email}</p>

                            <p><i className="fas fa-birthday-cake"></i>{element.bday}</p>
                        </div>

                    </div>
                   


                    </div>
                </div>
            );

        })
        return renderedarray;


    }
}


export default PeopleList;