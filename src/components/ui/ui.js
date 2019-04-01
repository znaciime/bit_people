import React from 'react'



class PeopleList extends React.Component {



    render() {
        const cName = (this.props.selected) ? "row" : "col-4";
        const renderedarray = this.props.people.map((element) => {
            return (
                <div className={cName}>
                    <div className="col-2">
                        <img src={element.picture}></img>
                    </div>
                    <div className="col-10 adress">

                        <p>{element.name.first} {element.name.last}</p>
                        <p><i className="fas fa-envelope"></i> {element.email}</p>

                        <p><i className="fas fa-birthday-cake"></i>{element.bday}</p>
                    </div>
                </div>
            );
        })
        return renderedarray;
    }
}


export default PeopleList;